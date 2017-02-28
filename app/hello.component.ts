import { Component, Input} from '@angular/core';
import {GreeterService} from './greeter.service'

@Component({
  selector: 'hello',
  template: '<b>Hello{{name}} </b>'
})
export class HelloComponent {
  @Input()
  name:string = "";
  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
}
