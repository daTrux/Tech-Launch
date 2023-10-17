import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityInfoComponent } from './city-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':name',
    component: CityInfoComponent
  },
  
];
const DECLARATIONS = [
  CityInfoComponent
]
const IMPORTS = [
  CommonModule,
  
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...IMPORTS,
    RouterModule.forChild(routes)
  ],
  exports: [...DECLARATIONS]
})
export class CityInfoModule { }
