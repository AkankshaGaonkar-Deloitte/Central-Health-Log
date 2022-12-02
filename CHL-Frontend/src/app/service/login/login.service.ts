import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
   
   //generate token
    // public generateToken(LoginForm: any){
    //   return this.http.post(`${baseUrl}/authenticate`,LoginForm);

    // }
}

