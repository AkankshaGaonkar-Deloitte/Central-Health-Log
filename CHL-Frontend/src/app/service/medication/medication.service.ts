import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from 'src/app/model/patient/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

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

  getAllPatientRecords(patientId: number): Observable<Medication[]>{
    let headers = this.createAuthenticationHeader()
    return this.http.get<Medication[]>(`http://localhost:8080/patient/medications/${patientId}`, {headers})
  }

  removeOrDeleteMedication(id?: number){
    let headers = this.createAuthenticationHeader()
    return this.http.delete<Medication>(`http://localhost:8080/patient/medications/${id as number}`, {headers})
  }

  addMedication(medication: Medication){
    let headers = this.createAuthenticationHeader()
    return this.http.post<Medication>(`http://localhost:8080/patient/medications`, medication, {headers})
  }

}
