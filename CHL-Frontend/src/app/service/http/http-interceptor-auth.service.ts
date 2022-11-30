import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService {

  // constructor() { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {

  //   /*
  //     Steps:
  //     1. intercept the http request
  //     2. clone the request and add basic auth header
  //     3. send the cloned request to the next handler
  //   */

  //   let username = 'user'
  //   let password = '123'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   req = req.clone(
  //     {
  //       setHeaders: {
  //         Authorization: basicAuthHeaderString
  //       }
  //     }
  //   )

  //   return next.handle(req)
  // }
}