// import { BreakpointObserver } from '@angular/cdk/layout';
// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  // OnDestroy,
  // OnInit,
} from '@angular/core';
// import { Subject } from 'rxjs';
// import { takeUntil, tap } from 'rxjs/operators';
// import { GridBreakpointType, mediaBreakpointUp } from '@app/ui/theme/utils';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingPageComponent {
  // implements OnInit, OnDestroy
  // isDesktopScreen = false;
  // isResultDisplayed = true;

  // private readonly destroy$ = new Subject<void>();

  // constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly breakpointObserver: BreakpointObserver) {}

  // ngOnInit() {
  // this.breakpointObserver
  //   .observe(mediaBreakpointUp(GridBreakpointType.Md))
  //   .pipe(
  //     tap((breakpoints) => {
  //       this.isDesktopScreen = breakpoints.matches;
  //       this.changeDetectorRef.markForCheck();
  //     }),
  //     takeUntil(this.destroy$)
  //   )
  //   .subscribe();
  // }

  // ngOnDestroy() {
  // this.destroy$.next();
  // this.destroy$.complete();
  // }

  onToggleView() {
    // this.isResultDisplayed = !this.isResultDisplayed;
  }
}
