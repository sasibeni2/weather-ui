import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
import { ForecastHour, ForecastHourAdapter } from './forecast-hour.model';
import { ForecastCondition, ForecastConditionAdapter } from './forecast-condition.model';
export interface ForecastWeather {
    maxtempC : number,
    maxtempF : number,
    mintempC : number,
    mintempF : number,
    dailyRain : number,
    totalPrecipeMm : number,
    hours: ForecastHour[],
    condition:ForecastCondition,
    date: Date;

}
@Injectable({
    providedIn: "root"
})
export class ForecastWeatherAdapter implements Adapter<ForecastWeather> {

    constructor(
        private forecastHourAdapter: ForecastHourAdapter,
        private forecastConditionAdapter: ForecastConditionAdapter,
    ) {

    }
    adapt(ForecastWeatherData: any): ForecastWeather {
        return {
            date: ForecastWeatherData.date,
           maxtempC: ForecastWeatherData.day.maxtemp_c,
           maxtempF: ForecastWeatherData.day.maxtemp_f,
           mintempC: ForecastWeatherData.day.mintemp_c,
           mintempF: ForecastWeatherData.day.mintemp_f,
           dailyRain: ForecastWeatherData.day.daily_chance_of_rain,
           totalPrecipeMm: ForecastWeatherData.day.totalprecip_mm,
           hours: this.forecastHourAdapter.adaptArray(ForecastWeatherData.hour),
           condition: this.forecastConditionAdapter.adapt(ForecastWeatherData.day.condition)
        }; 
    }

    adaptArray(items: any[]): ForecastWeather[] {
        return items.map(item => this.adapt(item));
    }
}  