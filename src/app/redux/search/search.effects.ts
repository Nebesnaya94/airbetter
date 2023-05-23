import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { SearchActions } from './search.actions';
import { PassengersActions } from '../passengers/passengers.actions';
import { EPassengerType } from '../common/common.models';
import { BookingActions } from '../booking/booking.actions';

@Injectable() // how else to scope it?
export class SearchEffects {
  constructor(private readonly actions$: Actions, private store: Store) {}

  private setSearchData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.setFlightSearchData),
      map((params) => {
        const passengers = params.data.passengers;
        return PassengersActions.setPassengers({
          adults: passengers[EPassengerType.Adult]
            ? Array(params.data.passengers[EPassengerType.Adult])
            : null,
          children: passengers[EPassengerType.Child]
            ? Array(params.data.passengers[EPassengerType.Child])
            : null,
          infants: passengers[EPassengerType.Infant]
            ? Array(params.data.passengers[EPassengerType.Infant])
            : null,
        });
      }),
      catchError((e) => of(SearchActions.setError({ error: e as Error })))
    );
  });

  private updateVariants$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        SearchActions.setDateLeave,
        SearchActions.setDateReturn,
        SearchActions.setDatesRange,
        SearchActions.setFlyFrom,
        SearchActions.setFlyTo
      ),
      switchMap(() => {
        return of(BookingActions.getVariants());
      })
    );
  });
}
