import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Task} from "../model/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient ) { }
  private _tasks = new Array<Task>()
  private url = environment.url+'/tasks'
  public getTasks(){
    this.http.get<Array<Task>>(this.url+'/all').subscribe(data =>{
      this._tasks = data
    })
  }

  get tasks(): Task[] {
    return this._tasks;
  }

  set tasks(value: Task[]) {
    this._tasks = value;
  }
}
