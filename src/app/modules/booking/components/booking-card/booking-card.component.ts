import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { BookingService } from '../../services/booking.service';
import { IKiwiResponse } from '../../models/booking.interface';
// import { Observable } from 'rxjs';
// import { BookingVariant } from 'src/app/booking/models';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
})
export class BookingCardComponent {
  @Input()
  bookingVariant: IKiwiResponse | null = null;
  @Input()
  isActive = false;
  @Output()
  chooseFlight = new EventEmitter<string | null>();

  // constructor() {}

  setActive() {
    this.chooseFlight.emit(this.bookingVariant?.data[0].id || null);
  }

  // onSelected(bookingVariant: BookingVariant) {}
}
