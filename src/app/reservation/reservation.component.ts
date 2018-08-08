import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: any;
  title = 'Tour of Heroes';
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getReservations().subscribe( (res) => {
      this.reservations = res;
      console.log(this.reservations);
    }, err => {
      console.log(err);
    })
  }

}