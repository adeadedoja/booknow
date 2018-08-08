import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getReservations().subscribe( (res) => {
      console.log(res);
      this.reservations = res;
    }, err => {
      console.log(err);
    })
  }

}
