import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {environment} from "../environments/environment";
import {CityListsComponent} from './city-lists/city-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
