import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarListComponent } from './cars/car-list/car-list.component';
import { RedCarComponent } from './cars/red-car/red-car.component';
import { BlueCarComponent } from './cars/blue-car/blue-car.component';
import { GreenCarComponent } from './cars/green-car/green-car.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCarDialogComponent } from './add-car-dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    RedCarComponent,
    BlueCarComponent,
    GreenCarComponent,
    AddCarDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DragDropModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
