import { WeatherCondition, WeatherConditionAdapter } from './weather-condition.model';
import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";

export interface CurrentWeather {

    condition: WeatherCondition;
    lastUpdate: Date;
    tempC: number;
    tempF: number;
    humidity:number,

    windMph: number;
    windKph: number;

    precipmm: number;
}


@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherAdapter implements Adapter<CurrentWeather> {

    constructor(
        private weatherConditionAdapter: WeatherConditionAdapter
    ) {

    }

    adapt(currentWeatherData: any): CurrentWeather {
        return {

            lastUpdate: currentWeatherData.last_updated,
            condition: this.weatherConditionAdapter.adapt(currentWeatherData.condition),
            tempC: currentWeatherData.temp_c,
            tempF: currentWeatherData.temp_f,
            windKph: currentWeatherData.wind_kph,
            windMph: currentWeatherData.wind_mph,
            precipmm: currentWeatherData.precipe_mm,
            humidity: currentWeatherData.humidity,
        };
    }

}