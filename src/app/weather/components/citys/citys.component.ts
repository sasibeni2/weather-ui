import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ForecastWeather } from '../../../models/forecast-weather.model';
import { ForecastsPageComponent } from '../../containers/forecasts-page/forecasts-page.component';
import { ForecastLocation } from 'src/app/models/forecast-location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.scss']
})
export class CitysComponent implements OnInit {
  
 data = [
  "Békéscsaba",
  "Budapest",
  "Debrecen",
  "Eger",
  "Győr",
  "Kaposvár",
  "Kecskemét",
  "Miskolc",
  "Nyiregyháza",
  "Pécs",
  "Salgótarján",
  "Szeged",
  "Szekszárd",
  "Székesfehérvár",
  "Szolnok",
  "Szombathely",
  "Tatabánya",
  "Veszprém",
  "Zalaegerszeg"

 ];
  constructor(
    private router: Router 
  ) {

   }

  ngOnInit(): void {
  }
  selectCity(forecastCity: string) {
    this.router.navigate(['forecast', forecastCity]);
  }

}
