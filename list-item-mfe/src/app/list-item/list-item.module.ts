import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListItemModule {
  
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(ListItemComponent, {injector: this.injector});

    // Specify your custom element unique name
    if (!customElements.get('first-button')) {
      customElements.define('first-button', ce);
    }
  }
}
