import { Injectable } from '@angular/core';
import { System } from '../objects/system';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private apiUrl = 'http://localhost:8080/systems';

  constructor(private client: HttpClient) { }

  public getSystems(): Observable<System[]> {
    return this.client.get<System[]>(this.apiUrl);
  }
}
