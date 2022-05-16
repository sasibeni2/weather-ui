import { Component, Input, OnInit } from '@angular/core';
import { ForecastWeather } from 'src/app/models/forecast-weather.model';

@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.scss']
})
export class WeatherHourComponent implements OnInit {

  @Input() dayWeather?: ForecastWeather;


  constructor() {

  }

  ngOnInit(): void {
    

  }


}
