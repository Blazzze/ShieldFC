import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { faPause, faPlay, faStopwatch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { StopwatchService } from 'src/app/services/stopwatch.service';
import { SegmentsClockComponent } from '../segments-clock/segments-clock.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild(SegmentsClockComponent) segment: SegmentsClockComponent;
  faPause = faPause;
  faPlay = faPlay;
  faStopwatch = faStopwatch;
  faTrashAlt = faTrashAlt;

  isRunning = false;

  sub: Subscription;

  constructor(private stopwatchService: StopwatchService) {
  }

  toggleRun(state: boolean): void {
    this.stopwatchService.toggleClock(state);
  }

  trash(): void {
    this.stopwatchService.zeroClock();
  }

  saveTime(): void {
    this.segment.save();
  }

  ngOnInit(): void {
    this.sub = this.stopwatchService.runningState$.subscribe((state: boolean) => {
      this.isRunning = state;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
