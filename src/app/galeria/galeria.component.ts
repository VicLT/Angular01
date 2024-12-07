import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad.model';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {

  weatherData: any;
  city: string = 'alicante';
  lat: string = '38.34517';
  lon: string = '-0.48149';

  constructor(private weatherService: MyServiceService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.lat, this.lon).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      console.log(this.weatherData.main.temp);
    })
  }

  /*getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      console.log(this.weatherData.main.temp);
    })
  }*/
  
  /*ciudades: Ciudad[] = [
    new Ciudad(0, "Madrid", "Capital de España", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT_IjFSMjjD-97i2g53k23qEFJhqryBLzbXlVOa6A4AWwoSqs8kYDLpvYyDHbIi-0S1PxCo1b0_kDCfzJdPR_qh2SUk5KcNr4lrjONq2A"),
    new Ciudad(1, "Barcelona", "Ciudad Condal", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIEdnS0Ouk8ajir-ZQk3NrTHhpa_X9StZw&s"),
    new Ciudad(2, "Valencia", "Ciudad del Turia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XRYj2cf8sroLK3sn8ucfc8KUcvQkr0r18w&s"),
    new Ciudad(3, "Sevilla", "Ciudad de la Giralda", "https://cdn-imgix.headout.com/mircobrands-content/image/24ba07eb91f7de63eef4c3eed31f005c-Seville%20Cathedral.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces"),
    new Ciudad(4, "Bilbao", "Ciudad del Botxo", "https://www.spain.info/export/sites/segtur/.content/imagenes/rutas/bilbao-dos-dias/bilbao-mercado-ribera-s410197552.jpg_1224728085.jpg")
  ];*/
}
