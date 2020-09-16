import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlueCarComponent } from './cars/blue-car/blue-car.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { GreenCarComponent } from './cars/green-car/green-car.component';
import { RedCarComponent } from './cars/red-car/red-car.component';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'cars/red',
        component: RedCarComponent
      },
      {
        path: 'cars/blue',
        component: BlueCarComponent
      },
      {
        path: 'cars/green',
        component: GreenCarComponent
      },
      {
        path: 'cars',
        component: CarListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
