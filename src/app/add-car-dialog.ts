import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from './car.service';

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'add-car-dialog.html',
})
export class AddCarDialogComponent implements OnInit {
    colors = [
        { value: 'red', viewValue: 'Red' },
        { value: 'blue', viewValue: 'Blue' },
        { value: 'green', viewValue: 'Green' }
    ];
    carForm;

    constructor(private carService: CarService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar) {

    }

    ngOnInit(): void {
        this.carForm = this.formBuilder.group(({
            name: ['', Validators.required],
            color: ['', Validators.required]
        }))
    }
    submit() {
        let response;
        this.carService.insertCar(this.carForm.getRawValue()).subscribe(data => {
            response = data;
        }, () => { }, () => {
            if (response.id > 0) {
                this.snackBar.open("Car added", "Success", { duration: 3000 });
                location.reload();

            }
            else {
                this.snackBar.open("Car already exists", "Fail", { duration: 2000 })
            }
        });
    }
}