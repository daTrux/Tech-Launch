import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
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
  locationList = ['Here', 'There', 'Anywhere'];
  eventManager = new Event('ListItemClickEvent');

  constructor(
    private readonly mfeManagementService: MfeManagementService,
    private readonly router: Router
  ) {}
  ngOnDestroy(): void {
    this.eventManager.unsubscribe(this.listItemClickHandler);
    this.eventManager.clear();
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
    this.eventManager.subscribe(this.listItemClickHandler);
  }
  listItemClickHandler = (id: string) => {
    this.router.navigateByUrl('/city')
  };
}
