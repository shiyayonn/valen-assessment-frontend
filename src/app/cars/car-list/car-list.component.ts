import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'color'];
  dataSource;
  constructor(private carService: CarService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.getData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getData() {
    this.carService.getAllCars().subscribe(data => {
      this.dataSource = data;
    })
  }


}
