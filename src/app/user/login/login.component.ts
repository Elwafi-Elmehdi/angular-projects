import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../controller/service/authentication.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthenticationService) { }

  get user(): User {
    return this.service.user;
  }
  public login(user:User){
    this.service.login(user);
  }

  ngOnInit(): void {
  }

}
