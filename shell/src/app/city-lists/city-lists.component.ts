import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MfeManagementService } from '../services/mfe-management.service';
import { Observable as Event } from 'windowed-observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-city-lists',
  templateUrl: './city-lists.component.html',
  styleUrls: ['./city-lists.component.scss'],
  
})
export class CityListsComponent implements OnInit, OnDestroy {
  @ViewChild('list', { read: ElementRef, static: true })
  list: ElementRef | undefined;
  @ViewChild('react', { read: ElementRef, static: true })
  react: ElementRef | undefined;
  locationList = ['Milan', 'Paris', 'Berlin'];
  eventManager = new Event('ListItemClickEvent');
  eventReactManager = new Event('ReactButtonClickEvent');

  constructor(
    private readonly mfeManagementService: MfeManagementService,
    private readonly router: Router
  ) {}
  ngOnDestroy(): void {
    this.eventManager.unsubscribe(this.listItemClickHandler);
    this.eventReactManager.unsubscribe(this.reactButtonClickHandler);
    this.eventManager.clear();
    this.eventReactManager.clear();
  }

  ngOnInit(): void {
    this.mfeManagementService.loadListItemMfe().then(() => {
      this.locationList.forEach((element: string, i: number) => {
        const el1 = document.createElement('list-item');
        el1.setAttribute('data-location-name', element);
        el1.setAttribute('id', 'item-' + i);
        this.list?.nativeElement.appendChild(el1);
      });
    });
    this.mfeManagementService.loadReactMfe().then(() => {
      const el1 = document.createElement('react-element');
      this.react?.nativeElement.appendChild(el1);
    });
    this.eventManager.subscribe(this.listItemClickHandler);
    this.eventReactManager.subscribe(this.reactButtonClickHandler);
  }
  listItemClickHandler = (name: string) => {
    this.router.navigate(['/city', name]);
  };
  reactButtonClickHandler = (message: string) => {
    alert(message);
  };
}
