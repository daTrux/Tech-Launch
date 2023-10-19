import { Injector, NgModule } from '@angular/core';
import { ListItemComponent } from './list-item.component';
import {createCustomElement} from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [ListItemComponent]
})
export class ListItemModule {
  
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(ListItemComponent, {injector: this.injector});

    // Specify your custom element unique name
    if (!customElements.get('list-item')) {
      customElements.define('list-item', ce);
    }
  }
}
