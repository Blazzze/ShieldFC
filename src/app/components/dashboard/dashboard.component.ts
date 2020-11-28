import { Component, OnInit, ViewChild } from '@angular/core';
import { faPause, faPlay, faStopwatch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { StopwatchService } from 'src/app/services/stopwatch.service';
import { SegmentsClockComponent } from '../segments-clock/segments-clock.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(SegmentsClockComponent) segment: SegmentsClockComponent;
  faPause = faPause;
  faPlay = faPlay;
  faStopwatch = faStopwatch;
  faTrashAlt = faTrashAlt;

  isRunning = false;


  constructor(private stopwatchService: StopwatchService) {
  }

  toggleRun(state: boolean): void {
    console.log("togglreRun", state);
    this.stopwatchService.toggleClock(state);
  }

  trash(): void {
    this.stopwatchService.zeroClock();
  }

  saveTime(): void {
    this.segment.save();
  }

  ngOnInit(): void {
    this.stopwatchService.runningState$.subscribe((state: boolean) => {
      console.log("running??", state);
      this.isRunning = state;
    });
  }

}
