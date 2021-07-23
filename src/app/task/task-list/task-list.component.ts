import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../controller/service/task.service";
import {Task} from "../../controller/model/task.model";
import {AuthenticationService} from "../../controller/service/authentication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service:TaskService,private authSerive:AuthenticationService) { }

  ngOnInit(): void {
    console.log('hehe')
    this.service.getTasks().subscribe((data) => {
      this.tasks = data;
    });

  }

  get tasks(): Array<Task> {
    return this.service.tasks;
  }
  set tasks(value: Array<Task>) {
    this.service.tasks = value;
  }
  public logout(){
    this.authSerive.logoutAll();
  }

  edit(i: number) {
    this.service.task = this.tasks[i];
  }

  delete(i: number) {
    const task = this.tasks[i];
    this.service.deleteTask(task._id).subscribe(data =>{
      console.log('mzn');
    this.tasks.splice(i,1);
    });
  }
}
