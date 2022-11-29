import { Patient } from './../../model/patient/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/patient";
  constructor(private httpClient : HttpClient) { }

 getPatientDetails(): Observable<Patient[]>{
    console.log("get patient list method invoked")
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get<Patient[]>(`${this.baseURL}`, {headers});
    
  }

  getPatientDetailsById(id: number): Observable<Patient>{
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`, {headers});
    
  }

  updatePatientDetails(patient: Patient):Observable<Patient>{
    let headers = this.createAuthenticationHeader()
    console.log("patient body is : " + patient.id)
    return this.httpClient.put<Patient>(`${this.baseURL}`, patient, {headers});

  }
  createAuthenticationHeader(){
    let username: string = 'nawaz2000'
    let password: string = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    //return basicAuthHeaderString;
    return new HttpHeaders({
    Authorization: basicAuthHeaderString
    })
    }
    // getAllPatientRecords(patientId: number): Observable<PastRecord[]>{
    // let headers = this.createAuthenticationHeader()
    // return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}`, {headers})
    // }
    
    

}
