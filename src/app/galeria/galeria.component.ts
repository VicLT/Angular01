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

  ciudades: Ciudad[] = [
    new Ciudad(0, 40.40841191, -3.68760088, "Madrid", "", 0, "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT_IjFSMjjD-97i2g53k23qEFJhqryBLzbXlVOa6A4AWwoSqs8kYDLpvYyDHbIi-0S1PxCo1b0_kDCfzJdPR_qh2SUk5KcNr4lrjONq2A"),
    new Ciudad(1, 41.38424664	, 2.17634927, "Barcelona", "", 0, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIEdnS0Ouk8ajir-ZQk3NrTHhpa_X9StZw&s"),
    new Ciudad(2, 39.47534441, -0.37565717, "Valencia", "", 0, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XRYj2cf8sroLK3sn8ucfc8KUcvQkr0r18w&s"),
    new Ciudad(3, 37.38620512, -5.9925136, "Sevilla", "", 0, "https://cdn-imgix.headout.com/mircobrands-content/image/24ba07eb91f7de63eef4c3eed31f005c-Seville%20Cathedral.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces"),
    new Ciudad(4, 43.25721957, -2.92390606, "Bilbao", "", 0, "https://www.spain.info/export/sites/segtur/.content/imagenes/rutas/bilbao-dos-dias/bilbao-mercado-ribera-s410197552.jpg_1224728085.jpg")
  ];

  constructor(private weatherService: MyServiceService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    for (let i = 0; i < this.ciudades.length; i++) {
      this.weatherService.getWeather(this.ciudades[i].latitud, this.ciudades[i].longitud).subscribe(data => {
          this.ciudades[i].clima = data.weather[0].description;
          this.ciudades[i].temperatura = data.main.temp-273.15;
          console.log(this.ciudades[i].clima);
      })
    }
  }
}