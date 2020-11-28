import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { noop, Subscription } from 'rxjs';
import { Clock } from 'src/app/models/clock';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'app-segments-clock',
  templateUrl: './segments-clock.component.html',
  styleUrls: ['./segments-clock.component.scss']
})
export class SegmentsClockComponent implements OnInit, OnDestroy {

  stopwatchInterval: any;
  runningStateSub: Subscription;
  clockStateSub: Subscription;


  constructor(private stopwatchService: StopwatchService) {
  }


  isSaveTime = true;
  hideDelimeter = false;
  clock: Clock = {
    miliseconds: 0,
    minutes: 0,
    seconds: 0
  };

  ngOnInit(): void {
    this.runningStateSub = this.stopwatchService.runningState$.subscribe((running: boolean) => {
      running ? this.start() : this.pause();
    });

    this.clockStateSub = this.stopwatchService.clockState$.subscribe((clock: Clock) => {
      this.clock = clock;
    });

  }

  start(): void {
    this.stopwatchInterval = setInterval(() => {
      this.clock.miliseconds++;
      this.isSaveTime ? this.stopwatchService.saveTime(this.clock) : noop();
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

  //Chrome Move to other tab bug. stops intervals and timeouts..
  @HostListener('window:focus', ['$event'])
  onFocus(event: any): void {
    console.log("event", event);
    this.isSaveTime = true;
    this.stopwatchService.getResumeTime();

  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: any): void {
    console.log("event", event);
    // this.pause();
    this.isSaveTime = false;
  }

  pause(): void {
    clearInterval(this.stopwatchInterval);
  }



  save(): void {
    this.stopwatchService.saveTick(Object.assign({}, this.clock));
  }

  ngOnDestroy(): void {
    this.runningStateSub.unsubscribe();
    this.clockStateSub.unsubscribe();
  }


}
