import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "./local-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http:HttpClient,private storageService:LocalStorageService) { }
  private _url = environment.url+'/users';
  private jwtHelper = new JwtHelperService();
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }

  private _user = new User()
  public _token: string | null = ''
  public _strorageUsername = ''

  // @ts-ignore
  get token(): string| null {
    return this._token;
  }

  // @ts-ignore
  set token(value: string) {
    this._token = value;
  }

  get strorageUsername(): string {
    return this._strorageUsername;
  }

  set strorageUsername(value: string) {
    this._strorageUsername = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public register(user:User){
    return this.http.post(this._url,user)
  }
  public login(user:User){
    this.http.post<any>(this._url+'/login',user).subscribe(data => {
      if(data._token && data.user){
        const {token,user} = data
        this.saveToken(token)
        this.saveUserAndUsername(user)
      }
    })
  }
  public logout(){
    this.http.post(this._url+'/logout',null)
    this._token = ''
    this._strorageUsername = ''
    this.storageService.remove(environment.tokenLabel)
    this.storageService.remove(environment.userLabel)
    this.storageService.remove(environment.usernameLabel)
  }

  public logoutAll(){
    this.http.post(this._url+'/logoutAll',null)
    this._token = ''
    this._strorageUsername = ''
    this.storageService.remove(environment.tokenLabel)
    this.storageService.remove(environment.userLabel)
    this.storageService.remove(environment.usernameLabel)
  }

  public readProfile() {
    return this.http.get(this._url+'/me')
  }

  private saveToken(token:string){
    this._token = token;
    this.storageService.set(environment.tokenLabel,token);
  }
  private saveUserAndUsername(user:any){
    this._strorageUsername = user._id
    this.user = user
    this.storageService.set(environment.usernameLabel,user._id)
    this.storageService.set(environment.userLabel, JSON.stringify(user))
  }
  public loadToken(){
    this._token = this.storageService.get(environment.tokenLabel);
  }
  public getUserFromStorage(){
    this.user = JSON.parse(<string>this.storageService.get(environment.userLabel));
    return JSON.parse(<string>this.storageService.get(environment.userLabel));
  }

  // @ts-ignore
  public isLoggedIn(): boolean {
    this.loadToken();
    if(this.token !=null && this.token !== ''){
      if(this.jwtHelper.decodeToken(this.token) != null || ''){
        if(!this.jwtHelper.isTokenExpired(this.token)){
          this.strorageUsername = this.jwtHelper.decodeToken(this.token)._id;
          return true
        }
      }
    }
    else{
      this.logout();
      return false;
    }
  }

}
