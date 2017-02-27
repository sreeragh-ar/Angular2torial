import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } '@angular/core';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello.component';
import {GreeterService} from './greeter.service';
import { CounterComponent } from './counter.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HelloComponent, CounterComponent],
  bootstrap: [AppComponent],
  providers: [GreeterService]
})
export class AppModule {
}
