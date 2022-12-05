import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pulse } from '../model/Pulse';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseurl="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }
  createAuthenticationHeader(){
    let username: string = 'nawaz2000'
    let password: string = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    //return basicAuthHeaderString;
    return new HttpHeaders({
      Authorization: basicAuthHeaderString
      })
      }
    sendOtp(contact:Number){
      let headers = this.createAuthenticationHeader()
      console.warn("sent otp")
      return this.httpClient.post(`${this.baseurl+'/mobileNo'}`,contact, {headers})

    }
    VerifyOtp(contactAndOtp:{mobile:number,otp:number}){
      let headers = this.createAuthenticationHeader()
      console.warn("verify")
      return this.httpClient.post(`${this.baseurl+'/otp'}`,contactAndOtp, {headers})

    }
    

}
