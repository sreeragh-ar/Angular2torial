import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector : 'counter',
  template : `<p>counterNum = {{num}}</p><button (click)='increment()'>Increment</button>`
})

export class CounterComponent {
  @Input()
  num = 0;
  @Output()
  numChange = new EventEmitter<number>();
  increment(){
    this.num+=1;
    this.numChange.emit(this.num);
  }
}
