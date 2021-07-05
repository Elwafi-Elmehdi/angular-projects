import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../controller/service/authentification.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthentificationService) { }

  get user(): User {
    return this.service.user;
  }
  public login(user:User){
    this.service.login(user).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
