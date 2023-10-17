import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListsComponent } from './city-lists/city-lists.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: CityListsComponent,
    pathMatch: 'full'
  },
  {
    path: 'city',
    
    loadChildren: () => import('cityPage/Module').then(m => m.CityInfoModule)
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
