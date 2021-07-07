import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../controller/model/user.model";
import {AuthenticationService} from "../../controller/service/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   constructor(private authService: AuthenticationService) {
  }
  private _user = new User();

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  ngOnInit(): void {
  }

  public register(user:User){
    this.authService.register(user);
  }

}
