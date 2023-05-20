import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
})
export class BookingSummaryComponent {
  flightsList = [
    {
      name: 'Dublin — Warsaw Modlin',
      date: 'Wednesday, 1 March, 2023',
      time: '8:40 — 12:00',
    },
    {
      name: 'Warsaw Modlin — Dublin',
      date: 'Saturday, 18 March, 2023',
      time: '7:40 — 11:00',
    },
  ];
}
