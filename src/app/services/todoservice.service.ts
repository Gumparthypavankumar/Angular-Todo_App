import { Injectable } from '@angular/core';

import { todo } from 'src/app/shared/todo';
import { Todos } from 'src/app/shared/todos';
import { Observable , of , throwError, Subscriber, from} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProcessHttpMsgService } from 'src/app/services/process-http-msg.service'
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  constructor(protected http:HttpClient, protected service:ProcessHttpMsgService) { }

  getData():Observable<todo[]>
  {
    return this.http.get<todo[]>('http://localhost:3000/data')
    .pipe(catchError(this.service.handleError));
  }

  AddData(text):void{
    let len;
    let obj:todo;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.getData().subscribe(data => {
      this.http.post<todo>('http://localhost:3000/data',JSON.stringify({
        id:data.length+1,
        title:text,
        description:`This is ${text} index ${data.length+1}`
    }),httpOptions).subscribe(data => console.log(data));
    });
  }

  DeleteTodo(id){
   return this.http.delete(`http://localhost:3000/data/${id}`)
   .pipe(catchError(this.service.handleError));
  }
}
