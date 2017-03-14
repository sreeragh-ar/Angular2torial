import { Component, Input} from '@angular/core';
import {GreeterService} from './greeter.service'

@Component({
  selector: 'hello',
  template: '<b>Hello{{name}}!!!!<ng-content select="footer"></ng-content><ng-content select=".content"></ng-content><ng-content select="header"></ng-content>!!!</b>'
})
export class HelloComponent {
  @Input()
  name:string = "";
  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
}
