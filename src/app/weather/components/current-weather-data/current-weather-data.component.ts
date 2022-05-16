import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from '../../../models/current-weather.model';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.scss']
})
export class CurrentWeatherDataComponent implements OnInit {

  @Input() currentWeather?: CurrentWeather;
  constructor() { }

  ngOnInit(): void {
    
  }

}
