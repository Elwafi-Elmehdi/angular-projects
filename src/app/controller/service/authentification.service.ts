import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http:HttpClient,private storageService:LocalStorageService) { }
  private url = environment.url+'/users'
  private _user = new User()
  private token:string
  private strorageUsername:string

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public register(user:User){
    return this.http.post(this.url,user)
  }
  public login(user:User){
    this.http.post<any>(this.url+'/login',user).subscribe(data => {
      if(data.token && data.user){
        const {token,user} = data
        this.saveToken(token)
        this.saveUserAndUsername(user)
      }
    })
  }
  public logout(){
    this.http.post(this.url+'/logout',null)
    this.token = ''
    this.strorageUsername = ''
    this.storageService.remove(environment.tokenLabel)
    this.storageService.remove(environment.userLabel)
    this.storageService.remove(environment.usernameLabel)
  }

  public readProfile() {
    return this.http.get(this.url+'/me')
  }

  private saveToken(token:string){
    this.token = token;
    this.storageService.set(environment.tokenLabel,token);
  }
  private saveUserAndUsername(user:any){
    this.strorageUsername = user._id
    this.user = user
    this.storageService.set(environment.usernameLabel,user._id)
    this.storageService.set(environment.userLabel, JSON.stringify(user))
  }
}
