import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PastRecord } from '../model/past-record';

@Injectable({
  providedIn: 'root'
})
export class PastRecordService {

  constructor(private http: HttpClient) { }

  createAuthenticationHeader(){
    let username: string = 'nawaz2000'
    let password: string = '123'

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    //return basicAuthHeaderString;
    return new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
  }

  getAllPatientRecords(patientId: number): Observable<PastRecord[]>{
    let headers = this.createAuthenticationHeader()
    return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}`, {headers})
  }

  filterBySeverity(patientId: number, severityFrom: number, severityTo: number){
    let headers = this.createAuthenticationHeader()
    return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}/filter-by-severity/${severityFrom}/${severityTo}`, {headers})
  }

  filterByDate(patientId: number, from: string, to: string){
    let headers = this.createAuthenticationHeader()
    return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}/search-by-date/${from}/${to}`, {headers})
  }

  
}
