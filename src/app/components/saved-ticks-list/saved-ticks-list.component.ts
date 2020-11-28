import { Component, OnInit } from '@angular/core';
import { Clock } from 'src/app/models/clock';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'app-saved-ticks-list',
  templateUrl: './saved-ticks-list.component.html',
  styleUrls: ['./saved-ticks-list.component.scss']
})
export class SavedTicksListComponent implements OnInit {

  tickList: Clock[];
  constructor(private stopwatchService: StopwatchService) { }

  ngOnInit(): void {
    this.stopwatchService.tickList$.subscribe((ticks: Clock[]) => {
      console.log("ticks", ticks);
      this.tickList = ticks;


    });
  }



  removeLine(index: number): void {
    this.stopwatchService.removeLine(index);
  }
}
