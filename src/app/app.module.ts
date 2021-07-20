import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskListComponent } from './task/task-list/task-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./controller/interceptors/auth.interceptor";
import {AuthGuard} from "./controller/guards/Auth.guard";
import { TaskCreatComponent } from './task/task-creat/task-creat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './user/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskListComponent,
    TaskCreatComponent,
    NavbarComponent,
    ProfilComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,AuthInterceptor,{ provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
