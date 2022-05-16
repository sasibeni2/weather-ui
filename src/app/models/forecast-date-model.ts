import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
export interface ForecastDate {
     
    date: Date;
}

@Injectable({
    providedIn: "root"
})
export class ForecastDateAdapter implements Adapter<ForecastDate> {
    adapt(forecastDateData: any): ForecastDate {
        return {
            date: forecastDateData.date
        };
    }
}