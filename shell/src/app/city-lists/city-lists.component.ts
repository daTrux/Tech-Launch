import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MfeManagementService } from '../services/mfe-management.service';

@Component({
  selector: 'app-city-lists',
  templateUrl: './city-lists.component.html',
  styleUrls: ['./city-lists.component.scss']
})
export class CityListsComponent implements OnInit{
  @ViewChild('ListContainer', { read: ElementRef, static: true })
  listContainer: ElementRef | undefined;
  
  constructor(private readonly mfeManagementService: MfeManagementService) {}

  ngOnInit(): void {
    this.mfeManagementService.loadListItemMfe().then(() => {

      const el1 = document.createElement('first-button');
      
    })
  }
}
