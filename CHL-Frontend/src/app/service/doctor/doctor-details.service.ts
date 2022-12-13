import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Observable } from 'rxjs';
import { D } from 'chart.js/dist/chunks/helpers.core';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {

  baseurl:string = "http://localhost:8080/doctor"

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

  getDoctorByDoctorId(doctorId: number): Observable<Doctor> {
    let headers = this.createAuthenticationHeader()
    return this.http.get<Doctor>(`${this.baseurl}/doctor-details/${doctorId}`, { headers });

  }

  getDoctorByStatusCode(statusCode: string):Observable<Doctor[]>{
    let headers = this.createAuthenticationHeader()
    return this.http.get<Doctor[]>(`${this.baseurl}/${statusCode}`, { headers });

  }

  updateDoorStatusCode(id : string, statusCode : string):Observable<Doctor>{
    let headers = this.createAuthenticationHeader()
    return this.http.put<Doctor>(`${this.baseurl}/${id}/${statusCode}`, null, { headers });
  }

  deleteDoctorById(id : string) : Observable<any>{
    let headers = this.createAuthenticationHeader()
    return this.http.delete<any>(`${this.baseurl}/${id}`, { headers });
  }
  
}
