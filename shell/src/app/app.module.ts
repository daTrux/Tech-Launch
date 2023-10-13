import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsModule} from '@ngxs/store';
import {environment} from "../environments/environment";
import {EventRegistryState} from "./event-registry-store/event-registry.state";
import {noop} from "rxjs";
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
