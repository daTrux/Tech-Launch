import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { 
  }

  getCurrentWeather(cityName: string) {
    return this.http.get(`https://api.weatherapi.com/v1/current.json?q=${cityName}&key=71ff8b65d8e242d2a21121047230310`)
  }
  
}
