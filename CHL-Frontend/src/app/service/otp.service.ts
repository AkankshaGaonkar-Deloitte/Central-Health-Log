import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMSPojo } from '../model/SMSPojo';
import { TempOTP } from '../model/TempOTP';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';


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
    sendOtp(contact:SMSPojo):Observable<String>{
      let headers = this.createAuthenticationHeader()
      // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };
      console.warn("sent otp")
      return this.httpClient.post<String>(`${this.baseurl+'/mobileNo'}`,contact, {headers})

    }
    VerifyOtp(contactAndOtp:TempOTP):Observable<String>{
      let headers = this.createAuthenticationHeader()
      console.warn("verify")
      return this.httpClient.post<String>(`${this.baseurl+'/otp'}`,contactAndOtp, {headers})

    }
    

}
