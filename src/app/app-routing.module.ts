import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from "./task/task-list/task-list.component";
import {RegisterComponent} from "./user/register/register.component";
import {LoginComponent} from "./user/login/login.component";
import {AuthGuard} from "./controller/guards/Auth.guard";
import {TaskCreatComponent} from "./task/task-creat/task-creat.component";
import {ProfilComponent} from "./user/profil/profil.component";
import {LoggedInGuard} from "./controller/guards/logged-in-guard.service";

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'login',component: LoginComponent,canActivate:[LoggedInGuard]},
  {path:'profil',component:ProfilComponent,canActivate: [AuthGuard],},
  {
    path:'task',
    component: TaskListComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'list', component: TaskListComponent },
      {path: 'create', component:TaskCreatComponent}
    ]
  }
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
