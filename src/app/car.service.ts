import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/cars`)
  }

  getRedCars(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/cars/red`)
  }

  getBlueCars(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/cars/blue`)
  }

  getGreenCars(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/cars/green`)
  }

  insertCar(body): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/cars`, JSON.stringify(body))
  }

  swapCars(body): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/cars`, JSON.stringify(body))
  }
}