import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  baseurl:string = "http://localhost:8080/patient"

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

  getPatientByPatientId(patientId: number): Observable<Patient> {
    let headers = this.createAuthenticationHeader()
    return this.http.get<Patient>(`${this.baseurl}/patient-details/${patientId}`, { headers });

  }

  savePatientDetails(patient: Patient): Observable<Patient>{
    let headers = this.createAuthenticationHeader()
    console.log(patient);
    return this.http.put<Patient>(`${this.baseurl}/patient-details`, patient, {headers})
  }

}
