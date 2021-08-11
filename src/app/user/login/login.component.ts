import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../controller/service/authentication.service";
import {User} from "../../controller/model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthenticationService,private router:Router) { }

  get user(): User {
    if(this.service.user === null){
      return new User();
    }
    return this.service.user;
  }

  public login(user:User){
    this.service.login(user);
  }

  ngOnInit(): void {
    if(this.service.getUserFromStorage() !== null){
      this.router.navigate(['/task/list'])
    }
  }

}
