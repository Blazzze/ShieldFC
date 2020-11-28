import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clock } from 'src/app/models/clock';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'app-saved-ticks-list',
  templateUrl: './saved-ticks-list.component.html',
  styleUrls: ['./saved-ticks-list.component.scss']
})
export class SavedTicksListComponent implements OnInit, OnDestroy {

  tickList: Clock[];
  sub: Subscription;
  constructor(private stopwatchService: StopwatchService) { }

  ngOnInit(): void {
    this.sub = this.stopwatchService.tickList$.subscribe((ticks: Clock[]) => {
      this.tickList = ticks;


    });
  }



  removeLine(index: number): void {
    this.stopwatchService.removeLine(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
