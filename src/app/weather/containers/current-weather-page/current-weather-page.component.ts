import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentLocationWeatherData } from '../../../models/current-location-weather-data.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../models/weather-data.model';

@Component({
  selector: 'app-current-weather-page',
  templateUrl: './current-weather-page.component.html',
  styleUrls: ['./current-weather-page.component.scss']
})
export class CurrentWeatherPageComponent implements OnInit {
  weatherData$!: Observable<WeatherData>;
  


  constructor(private weatherService: WeatherService) {}
   

  ngOnInit(): void {
    this.weatherService.getUserIPAddress().subscribe(ipAdress=>{
           
      this.weatherData$ = this.weatherService.getWeatherData(ipAdress);
    });
    
  }

}
