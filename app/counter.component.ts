import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector : 'counter',
  template : `<p>x{{num}}x</p><button (click)='increment()'>Increment</button>`
})

export class CounterComponent {
  @Input()
  num = 0;
  @Output()
  result = new EventEmitter<number>();
  increment(){
    this.num+=1;
    this.result.emit(this.num);
  }
}
