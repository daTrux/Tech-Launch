import { Component, ElementRef, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable as Event } from 'windowed-observable';
import { WeatherService } from '../services/weather.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ListItemComponent implements OnInit {
  eventManager = new Event('ListItemClickEvent');
  locationName: string = '';
  id: string = '';
  currentWeather$: Observable<any> = new Observable<any>
  
  constructor(public elementRef: ElementRef, private readonly weatherSvc: WeatherService) {}
    ngOnInit(): void {
      this.locationName = this.elementRef.nativeElement.getAttribute('data-location-name')
      this.id = this.elementRef.nativeElement.getAttribute('id')
      this.currentWeather$ = this.weatherSvc.getCurrentWeather(this.locationName).pipe(map((val: any) => val.current.temp_c));
    }

    onCardClick() {
     this.eventManager.publish(this.locationName)
    }
}
