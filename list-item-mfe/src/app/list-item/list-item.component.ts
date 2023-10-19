import { Component, ElementRef, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable as Event } from 'windowed-observable';

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

  
  constructor(public elementRef: ElementRef) {}
    ngOnInit(): void {
      this.locationName = this.elementRef.nativeElement.getAttribute('data-location-name')
      this.id = this.elementRef.nativeElement.getAttribute('id')
    }

    onCardClick() {
     this.eventManager.publish(this.locationName)
    }
}
