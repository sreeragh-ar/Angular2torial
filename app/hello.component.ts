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
  @Input()
  item = {};
  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
  ngOnInit() {
    console.log('component created', this.item)
  }
  ngOnDestroy() {
    console.log('destroying component', this.item)
  }
}
