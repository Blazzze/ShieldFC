import { Component, HostListener } from '@angular/core';
import { StopwatchService } from './services/stopwatch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShieldFcTimer';

  constructor(private stopwatchService: StopwatchService) {

  }


}
