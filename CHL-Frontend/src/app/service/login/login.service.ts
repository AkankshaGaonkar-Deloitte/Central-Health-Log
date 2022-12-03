import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
   
  private baseUrl="http://localhost:8080";
  //generate token
    public generateToken(LoginData: any){
      return this.http.post(`${this.baseUrl}/authenticate`,LoginData);

    }
}

