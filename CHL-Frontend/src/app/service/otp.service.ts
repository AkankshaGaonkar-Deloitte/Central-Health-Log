import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SMSPojo } from '../model/SMSPojo';
import { TempOTP } from '../model/TempOTP';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { PostResponse } from '../model/post-response';


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
    sendOtp(contact:SMSPojo): Observable<PostResponse>{
      let headers = this.createAuthenticationHeader()
      return this.httpClient.post<PostResponse>(`${this.baseurl+'/mobileNo'}`,contact, {headers})

    }
    VerifyOtp(contactAndOtp:TempOTP):Observable<PostResponse>{
      let headers = this.createAuthenticationHeader()
      console.warn("verify")
      console.log(contactAndOtp);
      
      return this.httpClient.post<PostResponse>(`${this.baseurl+'/otp'}`,contactAndOtp, {headers})

    }
    

}
