import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ForecastWeather } from '../../../models/forecast-weather.model';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.scss']
})
export class ForecastsComponent implements OnInit {
  @Input() forecastWeather?: ForecastWeather[];
  currentDay?: ForecastWeather;

  @Output() onSelectDay: EventEmitter<ForecastWeather>;

  constructor() {
    this.onSelectDay = new EventEmitter();
  }

  ngOnInit(): void {
  }

  selectDay(dayWeather: ForecastWeather) {
    this.currentDay = dayWeather;
    this.onSelectDay.emit(dayWeather);
  }

}
