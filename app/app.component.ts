import { Component, OnChange  } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<counter [num]="inum" (result)="ngOnChange($event)">come on</counter>init{{pc}}'
})
export class AppComponent implements OnChange {
  inum = 0;
  name:string = "A0099";
  pc = 0;
  ngOnChange(val: number) {
    this.pc = val;
  }
}
