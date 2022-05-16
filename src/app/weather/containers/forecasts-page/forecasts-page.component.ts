import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, delay, take, map } from 'rxjs';
import { WeatherData } from '../../../models/weather-data.model';
import { WeatherService } from '../../services/weather.service';
import { ForecastWeather } from '../../../models/forecast-weather.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecasts-page',
  templateUrl: './forecasts-page.component.html',
  styleUrls: ['./forecasts-page.component.scss']
})
export class ForecastsPageComponent implements OnInit {
  
  weatherData$!: Observable<WeatherData>;
  

  currentDay?: ForecastWeather;
  
  hasSelectedDay: boolean = false;
  constructor(private weatherservice: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['forecast_city']) {
        
        this.weatherData$ = this.weatherservice.getWeatherData(params['forecast_city']);
      } else {
        this.weatherservice.getUserIPAddress().subscribe(ipAdress=>{
           
          this.weatherData$ = this.weatherservice.getWeatherData(ipAdress);
        });
      }
    })
  }

  selectDay(dayWeather: ForecastWeather) {
    this.hasSelectedDay = true;
    this.currentDay = undefined;

    of(dayWeather).pipe(delay(1000), take(1)).subscribe(weather => {
      this.currentDay = weather;
    });
  }
}
