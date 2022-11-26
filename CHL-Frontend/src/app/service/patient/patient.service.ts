import { Patient } from './../../model/patient/patient';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);
  }

  getPatientDetailsById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
    
  }

}
