import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
import { HourCondition, HourConditionAdapter } from './hour-condition.model';
export interface ForecastHour {
    time: Date,
    tempC: number,
    tempF: number,
    wind: number,
    precipMm: number,
    condition: HourCondition,

}
@Injectable({
    providedIn: 'root'
})
export class ForecastHourAdapter implements Adapter<ForecastHour> {

    constructor(
        private hourConditionAdapter: HourConditionAdapter
    ){

    }
    adapt(forecastHourData: any): ForecastHour {
        return {
           time: forecastHourData.time,
           tempC: forecastHourData.temp_c,
           tempF: forecastHourData.temp_f,
           wind: forecastHourData.wind_kph,
           precipMm: forecastHourData.precip_mm,
           condition: this.hourConditionAdapter.adapt(forecastHourData.condition),

        };   
    }
 
    adaptArray(items: any[]): ForecastHour[] {
        return items.map(item => this.adapt(item));
    }
}