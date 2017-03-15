import { Component, Input} from '@angular/core';
import {GreeterService} from './greeter.service'

@Component({
  selector: 'hello',
  templateUrl: 'app/hello.component.html',
  styles:[`
    .colorText {
      color:red;
    }
    .specialFont {
      font-family: "Times New Roman";
    }`
  ]
})
export class HelloComponent {
  condition: boolean = true;
  @Input()
  name:string = "";
  @Input()
  txtColor:string = 'black';
  @Input()
  customStyles = {};
  iterable = [
    {title:'a', author:'A'},
    {title:'b', author:'B'},
    {title:'c', author:'C'},
    {title:'d', author:'D'}
  ]
  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
}
