import { Component, Input, OnInit } from '@angular/core';
import { ForecastWeather } from '../../../models/forecast-weather.model';


@Component({
  selector: 'app-current-hour',
  templateUrl: './current-hour.component.html',
  styleUrls: ['./current-hour.component.scss']
})
export class CurrentHourComponent implements OnInit {

  @Input() forecastWeather?: ForecastWeather[];


  constructor() {

  }

  ngOnInit(): void {


  }

  get firstDay(): ForecastWeather | null {
    return this.forecastWeather && this.forecastWeather.length > 0 ? this.forecastWeather[0] : null;
  }

}
