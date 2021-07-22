import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Task} from "../model/task.model";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient,private authService:AuthenticationService) { }
  public _tasks = new Array<Task>();
  private _task = new Task();
  get task(): Task {
    if(this._task == null){
      return new Task();
    }
    return this._task;
  }

  set task(value: Task) {
    this._task = value;
  }

  private url = environment.url+'/tasks';

  public getTasks(){
    return this.http.get<Array<Task>>(this.url);
  }

  get tasks(): Task[] {
    if(this._tasks == null)
      return new Array<Task>();
    return this._tasks;
  }

  set tasks(value: Task[]) {
    this._tasks = value;
  }

  public saveTask(task:Task){
    return this.http.post<Task>(this.url,task);
  }
  public deleteTask(id: string | undefined){
    return this.http.delete(environment.url+'/task/'+id);
  }
}
