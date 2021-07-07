import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../controller/service/task.service";
import {Task} from "../../controller/model/task.model";
import {AuthenticationService} from "../../controller/service/authentication.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service:TaskService,private authSerive:AuthenticationService) { }

  ngOnInit(): void {
    this.service.getTasks()
  }

  get tasks(): Task[] {
    return this.service.tasks;
  }
  public logout(){
    this.authSerive.logout();
  }

}
