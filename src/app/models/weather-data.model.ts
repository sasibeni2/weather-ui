import { ForecastLocation } from './forecast-location.model';
import { ForecastWeather } from './forecast-weather.model';
import { ForecastDate } from './forecast-date-model';
import { CurrentWeather } from './current-weather.model';


export interface WeatherData {
    current: CurrentWeather,
    forecasts: ForecastWeather[],
    location: ForecastLocation,
   
}