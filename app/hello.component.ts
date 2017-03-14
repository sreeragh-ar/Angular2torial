import { Component, Input} from '@angular/core';
import {GreeterService} from './greeter.service'

@Component({
  selector: 'hello',
  templateUrl: 'app/hello.component.html'
})
export class HelloComponent {
  @Input()
  name:string = "";
  @Input()
  txtColor:string = 'black';
  @Input()
  customStyles = {};
  
  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
}
