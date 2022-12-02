import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalData } from 'src/app/model/medical-data';

@Injectable({
  providedIn: 'root'
})
export class MedicalDataService {

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

  getMedicalDataByPatientId(patientId: number): Observable<MedicalData> {
    let headers = this.createAuthenticationHeader()
    return this.http.get<MedicalData>(`${this.baseurl}/medical-data/${patientId}`, { headers });

  }

  saveMedicalData(medicalData: MedicalData): Observable<MedicalData>{
    let headers = this.createAuthenticationHeader()
    console.log(`Inside medical data service:`);
    console.log(medicalData);
    
    
    return this.http.post<MedicalData>(`${this.baseurl}/medical-data`, medicalData, {headers})
  }
}
