import { Component, OnChange  } from '@angular/core';

@Component({
  selector: 'app-root',
  //one way binding
  /*template: '<counter [num]="inum"></counter>AppNum={{inum}}*/

  //2 way binding method 1
  /*template: '<counter ([num])="inum"></counter>AppNum={{inum}}'*/

  //2-way binding method 2
  // template: '<counter [num]="inum" (numChange)="inum=$event"></counter>AppNum={{inum}}'

  //2 way binding method 3
  //template: '<counter [num]="inum" (numChange) = "onModelUpdate($event)" ></counter>AppNum={{inum}}'
   templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnChange {
  inum = 0;
  name:string = "A0099";
  pc = 0;
  styling = {'color':'green',
             'font-weight': 'bold'
}
  onModelUpdate(val: number) {
    this.inum = val;
  }
  formValue = JSON.stringify({});

  onSubmit(form : NgForm) {
    this.formValue = JSON.stringify(form.value);
  }

  iterable = [
    {title:'a', author:'A', id:1},
    {title:'b', author:'B', id:2},
    {title:'c', author:'C', id:3},
    {title:'d', author:'D', id:4}
  ]
  other =  [
    
    {title:'b', author:'B', id:2},
    {title:'e', author:'E', id:5},
    {title:'f', author:'F', id:6},
    {title:'g', author:'G', id:7},
    {title:'h', author:'H', id:8},
    {title:'a', author:'A', id:1}
  ]
  addOther(){
    if(this.other.length !=0){
      
      this.iterable = this.other;
    }
  }

  trackById(index: number, elem: any): number {
    return elem.id;// return index for trackby index
  }
}
