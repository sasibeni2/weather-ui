import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
export interface WeatherCondition {
    text: string;
    icon: string;
}

@Injectable({
    providedIn: 'root'
})
export class WeatherConditionAdapter implements Adapter<WeatherCondition> {
    adapt(WeatherConditionData: any): WeatherCondition {
        return {
            text: WeatherConditionData.text,
            icon: WeatherConditionData.icon
        };
    }
} 