import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { Observable } from 'rxjs';

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
}
