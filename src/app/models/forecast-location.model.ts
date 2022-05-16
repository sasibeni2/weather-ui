import { Injectable } from "@angular/core";
import { Adapter } from './Adapter';
export interface ForecastLocation {
    country: string;
    name: string;
    region: string;

    lat: number;
    lon: number;
}
@Injectable({
    providedIn: 'root'
})
export class ForecastLocationAdapter implements Adapter<ForecastLocation> {
    adapt(forecastLocationData: any): ForecastLocation {
        return {
           country: forecastLocationData.country,
           name: forecastLocationData.name,
           lat: forecastLocationData.lat,
           lon: forecastLocationData.lon,
           region:forecastLocationData.region,
        };   
    } 

}