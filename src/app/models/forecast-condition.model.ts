import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
export interface ForecastCondition {
    
    icon: string;
}

@Injectable({
    providedIn: 'root'
})
export class ForecastConditionAdapter implements Adapter<ForecastCondition> {
    adapt(forecastConditionData: any): ForecastCondition {
        return {
            
            icon: forecastConditionData.icon
        };
    }
}    