import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  getCurrentUser(): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.get(`${this.baseUrl}/me/${userId}`);
  }

  logout(): void {
    localStorage.removeItem('userId');
  }
}
