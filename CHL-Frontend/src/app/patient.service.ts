import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
}

// getPatientById(id:number): Observable<Patient>{
//   return this.httpClient.get<Patient
// }