import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodPressure } from '../model/BloodPressure';
import { BMI } from '../model/BMI';
import { Pulse } from '../model/Pulse';


@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {
  private baseurl="http://localhost:8080/graph";

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
    getPulse():Observable<Pulse[]>{
      let headers = this.createAuthenticationHeader()
      return this.httpClient.get<Pulse[]>(`${this.baseurl+'/pulse'}`, {headers})

    }
    getBMI():Observable<BMI[]>{
      let headers = this.createAuthenticationHeader()
      return this.httpClient.get<BMI[]>(`${this.baseurl+'/bmi'}`, {headers})

    }
    getBloodPressure():Observable<BloodPressure[]>{
      let headers = this.createAuthenticationHeader()
      return this.httpClient.get<BloodPressure[]>(`${this.baseurl+'/bp'}`, {headers})

    }
    
      
      // getAllPatientRecords(patientId: number): Observable<PastRecord[]>{
      // let headers = this.createAuthenticationHeader()
      // return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}`, {headers})
      // }
  }

