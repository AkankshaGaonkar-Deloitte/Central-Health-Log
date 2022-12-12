import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
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

  filterByDoctor(patientId: number, doctorId: number){
    let headers = this.createAuthenticationHeader()
    return this.http.get<PastRecord[]>(`http://localhost:8080/patient/past-record/${patientId}/filter-by-doctor/${doctorId}`, {headers})
  }

  addPastRecord(newPastRecord: PastRecord){
    let headers = this.createAuthenticationHeader()
    return this.http.post<PastRecord>(`http://localhost:8080/patient/past-record`, newPastRecord, {headers})
  }

  uploadPrescription(prescription: Blob){
    let headers = this.createAuthenticationHeader()
    const formData: FormData = new FormData();

    formData.append('prescription', prescription);

    // return this.http.request(req, {{headers}});
    return this.http.post<PastRecord>('http://localhost:8080/patient/past-record/prescription', formData, {headers})
  }

  
}
