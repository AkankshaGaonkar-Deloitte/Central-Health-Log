import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  }

