import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;

  function testCityisFound(city: string, done: DoneFn) {
    service.getWeatherData(city).subscribe({
      next: (result) => {
        done.fail('City is founded');
      },
      error: (error) => {
        expect(error).toBeDefined();
        expect(error.error.error.message).toEqual('No matching location found.');
        done();
      }
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get London weather from getWeatherData ", (done: DoneFn) => {
    service.getWeatherData('London').subscribe(result => {
      expect(result).toBeDefined();
      done();
    });
  });

  it("should get Pécs location weather from getWeatherData", (done: DoneFn) => {
    service.getWeatherData('Pécs').subscribe(result => {
      expect(result.location.name).toEqual('Pécs');
      done();
    });
  });

  it("should get Pécs current wheater data from getWeatherData", (done: DoneFn) => {
    service.getWeatherData('Pécs').subscribe(result => {
      expect(result.current).toBeDefined();
      done();
    });
  });

  

  it("check Győr is found", (done: DoneFn) => {
    testCityisFound('Győr', done);
  });
  it("check Pécs is found", (done: DoneFn)=>{
    testCityisFound('Pécs',done);
  });


  
});
