import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { Patient } from 'src/app/model/patient';

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

      private baseurl="http://localhost:8080";
    addPatient(newPatient:Patient){
      let headers = this.createAuthenticationHeader()
      return this.httpClient.post<Patient>(`${this.baseurl+'/patient'}`, newPatient,{headers})

    }
    addDoctor(newDoctor:Doctor):Observable<Doctor>{
      let headers = this.createAuthenticationHeader()
      return this.httpClient.post<Doctor>(`${this.baseurl+'/doctor'}`,newDoctor, {headers})

    }
   IfUsernameExists( username: string){
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get(`${this.baseurl+'/patient/user/'+ username}`, {headers})
  }
  IfContactExists( phoneNo: number){
    let headers = this.createAuthenticationHeader()
    console.log('phone')
    return this.httpClient.get(`${this.baseurl+'/patient/phone/'+ phoneNo}`, {headers})
  }
    
    
   }
    

