import { CurrentWeather } from './current-weather.model';
import { CurrentLocation } from './current-location.model';

export interface CurrentLocationWeatherData {
    current: CurrentWeather, 
    location: CurrentLocation
}