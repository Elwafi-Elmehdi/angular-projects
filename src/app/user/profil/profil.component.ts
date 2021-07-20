import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../controller/service/authentication.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  private _user: User | undefined
  get user(): User {
    if(this._user == null)
      return new User();
    return this._user;
  }

  set user(value: User) {

    this._user = value;
  }

  constructor(private authService:AuthenticationService) { }

  public logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
    this.user = this.authService.getUserFromStorage();
    console.log(this.user)
  }

}
