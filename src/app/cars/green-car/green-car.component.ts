import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-green-car',
  templateUrl: './green-car.component.html',
  styleUrls: ['./green-car.component.scss']
})
export class GreenCarComponent implements OnInit {
  cars;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    let response;
    this.cars = this.carService.getGreenCars().subscribe(data => {
      response = data;
    }, () => { }, () => {
      this.cars = response;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cars, event.previousIndex, event.currentIndex);
    let body = {
      "name_1": this.cars[event.previousIndex].name,
      "name_2": this.cars[event.currentIndex].name

    }
    this.carService.swapCars(body).subscribe()
  }
}
