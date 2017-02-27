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
  template: '<counter [num]="inum" (numChange) = "onModelUpdate($event)" ></counter>AppNum={{inum}}'
})
export class AppComponent implements OnChange {
  inum = 0;
  name:string = "A0099";
  pc = 0;
  onModelUpdate(val: number) {
    this.inum = val;
  }
}
