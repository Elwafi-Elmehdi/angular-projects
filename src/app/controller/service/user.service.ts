import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  private url = environment.url+'/users'

  public register(user:User){
    return this.http.post(this.url,user)
  }
  public login(user:User){
    return this.http.post(this.url,user)
  }
  public readProfile() {
    return this.http.get(this.url+'/me')
  }
}
