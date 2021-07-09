import { Component, OnInit } from '@angular/core';
import {Task} from "../../controller/model/task.model";
import {TaskService} from "../../controller/service/task.service";

@Component({
  selector: 'app-task-creat',
  templateUrl: './task-creat.component.html',
  styleUrls: ['./task-creat.component.css']
})
export class TaskCreatComponent implements OnInit {

  constructor(private service:TaskService) { }

  ngOnInit(): void {
  }

  get task(): Task {
    return this.service.task;
  }
  set task(value: Task) {
    this.service.task = value;
  }

  public createTask(task:Task){
    this.service.saveTask(task).subscribe(data => {
      console.log(data)
      this.service.tasks.push(task);
      this.task = new Task();
    })

  }

}
