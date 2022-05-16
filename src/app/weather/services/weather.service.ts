import { Injectable } from '@angular/core';
import { CurrentWeatherAdapter, CurrentWeather } from '../../models/current-weather.model';
import { CurrentLocationAdapter, CurrentLocation } from '../../models/current-location.model';
import { ForecastWeatherAdapter, ForecastWeather } from '../../models/forecast-weather.model';
import { ForecastLocationAdapter, ForecastLocation } from '../../models/forecast-location.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay } from 'rxjs';
import { CurrentLocationWeatherData } from '../../models/current-location-weather-data.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { ForecastDateAdapter } from '../../models/forecast-date-model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  FORECAST_DAYS: number = 3;

  constructor(
    private http: HttpClient,
    private currentWeatherAdapter: CurrentWeatherAdapter,
    private currentLocationAdapter: CurrentLocationAdapter,
    private forecastWeatherAdapter: ForecastWeatherAdapter,
    private forecastLocationadapter: ForecastLocationAdapter,
    private forecastDateAdapter: ForecastDateAdapter,

  ) { }


  getWeatherData(location: string, days: number = this.FORECAST_DAYS): Observable<WeatherData> {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=af9b12ecec054afcbc684626222103&q=${location}&days=${days}&aqi=no&alerts=no`
    return this.http.get<{ current: any, forecast: any, location: any }>(url)
      .pipe(
        
        map(result =>
        (
          {
            current: this.currentWeatherAdapter.adapt(result.current),
            forecasts: this.forecastWeatherAdapter.adaptArray(result.forecast.forecastday),
            location: this.forecastLocationadapter.adapt(result.location),

          }
        ))
      );
  }

  getUserIPAddress(): Observable<string> 
  {
    return this.http.get<{ ip: string}>("http://api.ipify.org/?format=json").pipe(        
      map(result  => result.ip)      
    );    
  }

}
