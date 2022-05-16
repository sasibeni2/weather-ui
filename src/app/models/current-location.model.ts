import { Injectable } from "@angular/core";
import { Adapter } from './Adapter';
export interface CurrentLocation {
    country: string;
    name: string;

    lat: number;
    lon: number;
}
@Injectable({
    providedIn: 'root'
})
export class CurrentLocationAdapter implements Adapter<CurrentLocation> {
    adapt(currentLocationData: any): CurrentLocation {
        return {
           country: currentLocationData.country,
           name: currentLocationData.name,
           lat: currentLocationData.lat,
           lon: currentLocationData.lon,
        };   
    }

}