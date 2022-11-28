import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodPressure } from '../model/BloodPressure';
import { BMI } from '../model/BMI';
import { Pulse } from '../model/Pulse';


@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {
  private baseurl="http://localhost:8080/graph";

  constructor(private httpClient:HttpClient) { }
    getPulse():Observable<Pulse[]>{
      return this.httpClient.get<Pulse[]>(`${this.baseurl+'/pulse'}`)

    }
    getBMI():Observable<BMI[]>{
      return this.httpClient.get<BMI[]>(`${this.baseurl+'/bmi'}`)

    }
    getBloodPressure():Observable<BloodPressure[]>{
      return this.httpClient.get<BloodPressure[]>(`${this.baseurl+'/bp'}`)

    }
  }

