import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../controller/service/task.service";
import {Task} from "../../controller/model/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service:TaskService) { }

  ngOnInit(): void {
    this.service.getTasks()
  }

  get tasks(): Task[] {
    return this.service.tasks;
  }

}
