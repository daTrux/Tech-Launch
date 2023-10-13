import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListsComponent } from './city-lists/city-lists.component';

const routes: Routes = [
  {
    path: '',
    component: CityListsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
