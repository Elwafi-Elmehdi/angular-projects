import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../service/authentification.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthentificationService) {}
  public url = environment.url;
  // @ts-ignore
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = httpRequest.url;

    if(url.includes(this.url+'/users/login'))
      return next.handle(httpRequest);
    if(url.includes(this.url+'/users/register'))
      return next.handle(httpRequest);

    this.authService.loeaToken();
    const token = this.authService.token;
    const request = httpRequest.clone({setHeaders:{Autorization:`Bearer ${token}`}});
    next.handle(request);
  }
}
