import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiKey = '4e706e970d19050ee30516f30ca7cb74';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  //private apiUrl = `http://api.openweathermap.org/geo/1.0/direct`;

  constructor(private http: HttpClient) { }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es`;
    return this.http.get(url);
  }
  
  /*getWeather(city: string): Observable<any> {
    const url = '${this.apiUrl}?q=${city}&limit=1&appid=${this.apiKey}';
    return this.http.get(url);
  }*/

  // https://api.openweathermap.org/data/2.5/weather?lat=38.34517&lon=-0.48149&appid=c2a600b1ed43a78d56f38196c1f9c380&lang=es
}
