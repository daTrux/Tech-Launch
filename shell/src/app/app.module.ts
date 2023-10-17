import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {environment} from "../environments/environment";
import {EventRegistryState} from "./event-registry-store/event-registry.state";
import {CityListsComponent} from './city-lists/city-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([EventRegistryState], {
      developmentMode: !environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
