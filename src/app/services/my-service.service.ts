import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiKey = '';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es`;
    return this.http.get(url);
  }
}
