import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private registerUrl = 'http://localhost:8080/vehicle/register';
  private userVehiclesUrl = 'http://localhost:8080/vehicle/user';

  constructor(private http: HttpClient) {}

  registerVehicle(vehicleData: any): Observable<any> {
    return this.http.post(this.registerUrl, vehicleData);
  }

  getUserVehicles(): Observable<any[]> {
    const userId = localStorage.getItem('userId');
    return this.http.get<any[]>(`${this.userVehiclesUrl}/${userId}`);
  }
}
