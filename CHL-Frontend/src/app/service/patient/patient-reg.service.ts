import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientRegService {

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
      // baseurl=
    // addPatient():Observable<Patient[]>{
    //   let headers = this.createAuthenticationHeader()
    //   return this.httpClient.post<Patient[]>(`${this.baseurl+'/patient'}`, {headers})

    // }
    // addDoctor():Observable<Doctor[]>{
    //   let headers = this.createAuthenticationHeader()
    //   return this.httpClient.post<Doctor[]>(`${this.baseurl+'/doctor'}`, {headers})

    // }
}
