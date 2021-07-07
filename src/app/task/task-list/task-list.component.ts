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
    console.log('hehe')
    this.service.getTasks().subscribe(data => {
      console.log(data)
      this.tasks = data
    })
  }

  public getTasks(){
    console.log('hehe')
  }

  get tasks(): Array<Task> {
    return this.service.tasks;
  }
  set tasks(value: Array<Task>) {
    this.service.tasks = value;
  }
  public logout(){
    this.authSerive.logout();
  }

}
