import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task/task-list/task-list.component";
import {RegisterComponent} from "./user/register/register.component";
import {LoginComponent} from "./user/login/login.component";

const routes: Routes = [

  {path: '', component: RegisterComponent },
  {path: 'login',component: LoginComponent},
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
