import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPastAlarms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Past`);
  }

  saveAlarm(alarm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Past-save`, alarm);
  }
}
