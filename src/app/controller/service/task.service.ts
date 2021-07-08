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
  private url = environment.url+'/tasks';

  public getTasks(){
    this.http.get(this.url).subscribe(data => {
      console.log(data)
    });
  }

  get tasks(): Task[] {
    if(this._tasks == null)
      return new Array<Task>();
    return this._tasks;
  }

  set tasks(value: Task[]) {
    this._tasks = value;
  }
}
