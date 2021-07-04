import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task/task-list/task-list.component";
import {RegisterComponent} from "./user/register/register.component";

const routes: Routes = [

  {path: '', component: RegisterComponent },
  {path: 'task/list', component: TaskListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
