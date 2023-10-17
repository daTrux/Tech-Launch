import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityInfoComponent } from './city-info.component';
import { BrowserModule } from '@angular/platform-browser';

const DECLARATIONS = [
  CityInfoComponent
]
const IMPORTS = [
  CommonModule
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...IMPORTS
  ],
  exports: [...DECLARATIONS]
})
export class CityInfoModule { }
