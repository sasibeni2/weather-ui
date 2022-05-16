import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitysComponent } from './weather/components/citys/citys.component';
import { CurrentWeatherPageComponent } from './weather/containers/current-weather-page/current-weather-page.component';
import { ForecastsPageComponent } from './weather/containers/forecasts-page/forecasts-page.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'current', component: CurrentWeatherPageComponent },

  { 
    path: 'forecast', component: ForecastsPageComponent
  },
  
  {
    path: 'forecast/:forecast_city', component: ForecastsPageComponent
  },
  
  { path: 'city', component: CitysComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
