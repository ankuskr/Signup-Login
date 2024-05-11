import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  createUser(data: any) {
    // return this.http.post('http://localhost:3000/api/v1/signup',data);
    return this.http.post('localStorage.setItem(data)', data);
  }
}
