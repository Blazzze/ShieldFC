import { Component, OnInit } from '@angular/core';
import { Clock } from 'src/app/models/clock';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'app-segments-clock',
  templateUrl: './segments-clock.component.html',
  styleUrls: ['./segments-clock.component.scss']
})
export class SegmentsClockComponent implements OnInit {

  stopwatchInterval: any;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  constructor(private stopwatchService: StopwatchService) {
  }

  hideDelimeter = false;
  clock: Clock = {
    miliseconds: 0,
    minutes: 0,
    seconds: 0
  };

  ngOnInit(): void {
    this.stopwatchService.runningState$.subscribe((running: boolean) => {
      running ? this.start() : this.pause();
    });

    this.stopwatchService.clockState$.subscribe((clock: Clock) => {
      this.clock = clock;
    });

  }

  start(): void {
    this.stopwatchInterval = setInterval(() => {
      this.clock.miliseconds++;
      this.stopwatchService.saveTime(this.clock);
      if (this.clock.miliseconds >= 100) {
        this.hideDelimeter = !this.hideDelimeter;
        this.clock.miliseconds = 0;
        this.clock.seconds++;

        if (this.clock.seconds >= 60) {
          this.clock.seconds = 0;
          this.clock.minutes++;
        }
      }
    }, 10);
  }

  pause(): void {
    clearInterval(this.stopwatchInterval);
  }



  save(): void {
    console.log("saveTick");
    this.stopwatchService.saveTick(Object.assign({}, this.clock));
  }



}
