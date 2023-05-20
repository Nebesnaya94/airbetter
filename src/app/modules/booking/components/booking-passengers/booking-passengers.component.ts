import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-booking-passengers',
  templateUrl: './booking-passengers.component.html',
})
export class BookingPassengersComponent {
  @Output() completed = new EventEmitter<boolean>();

  setCompleted() {
    this.completed.emit(true);
  }
}
