import { Injectable } from '@angular/core';

import { todo } from 'src/app/shared/todo';
import { v4 as uuid } from "uuid";
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

  AddData(text):Observable<todo>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let id = uuid();
    let data = {
      id,
      title:text,
      description:`This is ${text} with id ${id} `
    }
    return this.http.post<todo>('http://localhost:3000/data',data,httpOptions);
  }

  DeleteTodo(id){
   return this.http.delete(`http://localhost:3000/data/${id}`)
   .pipe(catchError(this.service.handleError));
  }
}
