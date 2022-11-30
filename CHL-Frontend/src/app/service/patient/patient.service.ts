import { Patient } from './../../model/patient/patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitals } from 'src/app/model/patient/vitals';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    private baseurl="http://localhost:8080";
  addPatient(newPatient:Patient):Observable<Patient>{
  let headers = this.createAuthenticationHeader()
  return this.httpClient.post<Patient>(`${this.baseurl+'/patient'}`, newPatient,{headers})
  }
  constructor(private httpClient : HttpClient) { }

 getPatientDetails(): Observable<Patient[]>{
    console.log("get patient list method invoked")
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get<Patient[]>(`${this.baseurl+'/patient'}`, {headers});
    
  }

  getPatientDetailsById(id: number): Observable<Patient>{
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get<Patient>(`${this.baseurl+'/patient'}/${id}`, {headers});
    
  }

  updatePatientDetails(patient: Patient):Observable<Patient>{
    let headers = this.createAuthenticationHeader()
    console.log("patient body is : " + patient.id)
    return this.httpClient.put<Patient>(`${this.baseurl+'/patient'}`, patient, {headers});

  }
  updateVitals(vitals: Vitals):Observable<Vitals>{
    let headers = this.createAuthenticationHeader()
    console.log("patient body is : " + vitals.chronicHealthProblems)
    return this.httpClient.put<Vitals>(`${this.baseurl+'/vitals'}`, vitals, {headers});

  }
  getVitalsById(id: number): Observable<Vitals>{
    let headers = this.createAuthenticationHeader()
    return this.httpClient.get<Vitals>(`${this.baseurl+'/vitals'}/${id}`, {headers});
    
  }
  createAuthenticationHeader(){
    let username: string = 'nawaz2000'
    let password: string = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return new HttpHeaders({
    Authorization: basicAuthHeaderString
    })
    }
}