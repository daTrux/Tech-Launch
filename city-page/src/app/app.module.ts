import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityInfoModule } from './city-info/city-info.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CityInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
