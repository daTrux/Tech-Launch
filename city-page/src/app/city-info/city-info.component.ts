import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom, 
})
export class CityInfoComponent implements OnInit {
  name = ''
  constructor(private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
   this.name = this.route.snapshot.paramMap.get('name')!
  }
}
