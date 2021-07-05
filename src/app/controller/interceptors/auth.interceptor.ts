import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}
  public url = environment.url;
  // @ts-ignore
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = httpRequest.url;

    if(url.includes(this.url+'/users/login'))
      return next.handle(httpRequest);
    if(url.includes(this.url+'/users/register'))
      return next.handle(httpRequest);

    this.authService.loadToken();
    const token = this.authService.token;
    const request = httpRequest.clone({setHeaders:{Autorization:`Bearer ${token}`}});
    next.handle(request);
  }
}
