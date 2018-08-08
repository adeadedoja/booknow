import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {

  reservationForm: FormGroup;
  name:string = '';
  departure_city:string = '';
  arrival_city:string = '';
  departure_date:string = '';
  return_date:string = '';
  class:string = '';
  seat:string = '';


  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'departure_city': [null, Validators.required],
      'arrival_city': [null, Validators.required],
      'departure_date': [null, Validators.required],
      'return_date': [null, Validators.required],
      'class': [null, Validators.required],
      'seat': [null, Validators.required]
    })
  }

  onFormSubmit(form:NgForm) {
    this.api.postReservation(form).subscribe( res => {
        let id = res['_id'];
        this.router.navigate(['/reservation-details', id]);
    }, err => {
      console.log(err);
    })
  }

}
