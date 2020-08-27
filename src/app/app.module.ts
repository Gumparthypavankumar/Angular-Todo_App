import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TodoserviceService } from '../app/services/todoservice.service';
import { ProcessHttpMsgService } from '../app/services/process-http-msg.service';
import { AppComponent } from './app.component';
import { TodoHomeComponent } from './components/todo-home/todo-home.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ TodoserviceService , ProcessHttpMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
