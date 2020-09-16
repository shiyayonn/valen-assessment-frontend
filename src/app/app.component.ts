import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCarDialogComponent } from './add-car-dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valens-assessment-frontend';
  showFiller = false;

 
  constructor(public dialog: MatDialog) {

  }


  addCar() {

    const dialogRef = this.dialog.open(AddCarDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
