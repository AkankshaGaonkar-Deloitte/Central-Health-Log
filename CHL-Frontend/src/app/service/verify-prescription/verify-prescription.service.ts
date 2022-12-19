import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostResponse } from 'src/app/model/post-response';
import { Prescription } from 'src/app/model/prescription';

@Injectable({
  providedIn: 'root'
})
export class VerifyPrescriptionService {

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

  verifyPrescription(prescription: Blob){
    let headers = this.createAuthenticationHeader()
    const formData: FormData = new FormData();

    formData.append('prescription', prescription);

    // return this.http.request(req, {{headers}});
    return this.http.post<PostResponse>('http://localhost:8080/verify-prescription', formData, {headers})
  }
}
