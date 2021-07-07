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
  get user(): User {
    return this.authService.user;
  }
  set user(value: User) {
    this.authService.user = value;
  }

  ngOnInit(): void {
  }

  public register(){
    this.authService.register(this.user);
  }

}
