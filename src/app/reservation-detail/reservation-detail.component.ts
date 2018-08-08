import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  reservation: {}
  title = 'Bawo ni Padi mi';

  constructor(private api: ApiService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.getReservationDetails(this.route.snapshot.params['id']);
  }

  getReservationDetails($id){
    this.api.getReservation($id).subscribe(data => {
      this.reservation = data;
    })
  }

}
