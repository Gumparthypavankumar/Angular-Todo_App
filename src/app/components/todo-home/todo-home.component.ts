import { Component, OnInit } from '@angular/core';

import { todo } from 'src/app/shared/todo';
import { Todos } from 'src/app/shared/todos';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  todos:todo[];
  text:string;
  errMess:string;
  constructor(protected data:TodoserviceService) { 
    this.data.getData().subscribe(res => this.todos = res,
      err => this.errMess=err);
  }

  ngOnInit() {
  }
  AddTodo()
  {
    this.data.AddData(this.text);
    setTimeout(() => {
      this.data.getData().subscribe(res => this.todos = res,
        err => this.errMess=err);
    },100);
    this.text = '';
  }
  deleteTodo(id){
    this.data.DeleteTodo(id).subscribe(res => {
      setTimeout(() => {
        this.data.getData().subscribe(res => this.todos = res,
          err => console.log(err));
      },100)},err => this.errMess=err);
   }
}
