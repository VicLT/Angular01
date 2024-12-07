import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiKey = 'c2a600b1ed43a78d56f38196c1f9c380';
  //private apiUrl = `http://api.openweathermap.org/geo/1.0/direct`;
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) { }

  /*getWeather(city: string): Observable<any> {
    const url = '${this.apiUrl}?q=${city}&limit=1&appid=${this.apiKey}';
    return this.http.get(url);
  }*/

  getWeather(lat: string, lon: string): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es`;
    return this.http.get(url);
  }

  // https://api.openweathermap.org/data/2.5/weather?lat=38.34517&lon=-0.48149&appid=c2a600b1ed43a78d56f38196c1f9c380&lang=es
}
