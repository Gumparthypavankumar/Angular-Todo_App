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
    this.getTodos();
  }

  ngOnInit() {
  }
  getTodos(){
    this.data.getData().subscribe(res => this.todos = res,
      err => this.errMess=err);
  }
  AddTodo()
  {
    this.data.AddData(this.text).subscribe(todovalue => this.todos.push(todovalue), err => this.errMess=err);
    this.text = "";
  }
  deleteTodo(id){
    this.data.DeleteTodo(id).subscribe(res => this.todos = this.todos.filter(todovalue => todovalue.id !== id), err => this.errMess = err);
   }
}
