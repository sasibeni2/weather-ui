import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherPageComponent } from './containers/current-weather-page/current-weather-page.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentWeatherDataComponent } from './components/current-weather-data/current-weather-data.component';
import { PresentWithDefaultPipe } from './pipes/present-with-default.pipe';
import { ForecastsComponent } from './components/forecasts/forecasts.component';
import { ForecastsPageComponent } from './containers/forecasts-page/forecasts-page.component';
import { CurrentHourComponent } from './components/current-hour/current-hour.component';
import { WeatherHourComponent } from './components/weather-hour/weather-hour.component';
import { CitysComponent } from './components/citys/citys.component';




@NgModule({
  declarations: [
    CurrentWeatherPageComponent,
    CurrentWeatherDataComponent,
    PresentWithDefaultPipe,
    ForecastsComponent,
    ForecastsPageComponent,
    CurrentHourComponent,
    WeatherHourComponent,
    CitysComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports: [
    CurrentWeatherPageComponent
  ]
})
export class WeatherModule { }
