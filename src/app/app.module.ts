import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'reservations',
    component: ReservationComponent,
    data: { title: 'Reservation List' }
  },
  {
    path: 'reservation-details/:id',
    component: ReservationDetailComponent,
    data: { title: 'Reservation Details' }
  },
  {
    path: 'reservation-create',
    component: ReservationCreateComponent,
    data: { title: 'Reservation Book' }
  },
  {
    path: 'reservation-edit/:id',
    component: ReservationEditComponent,
    data: { title: 'Reservation Book' }
  },
  {
    path: '',
    redirectTo: '/reservations',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationDetailComponent,
    ReservationCreateComponent,
    ReservationEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
