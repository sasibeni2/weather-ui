import { Adapter } from './Adapter';
import { Injectable } from "@angular/core";
export interface HourCondition {
    icon: string,
}
@Injectable({
    providedIn: 'root'
})
export class HourConditionAdapter implements Adapter<HourCondition> {
    adapt(hourConditionData: any): HourCondition {
        return {
            icon:hourConditionData.icon
        };
    }
}