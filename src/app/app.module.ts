import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SevenSegModule } from 'ng-sevenseg';
import { SavedTicksListComponent } from './components/saved-ticks-list/saved-ticks-list.component';
import { SegmentsClockComponent } from './components/segments-clock/segments-clock.component';
import { PadRightPipe } from './pipes/pad-right.pipe';
import { SimpleSegmentComponent } from './components/simple-segment/simple-segment.component';
import { DuoNumberComponent } from './components/duo-number/duo-number.component';
import { DuoNumberBigComponent } from './components/duo-number-big/duo-number-big.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DashboardComponent,
    SavedTicksListComponent,
    SegmentsClockComponent,
    PadRightPipe,
    SimpleSegmentComponent,
    DuoNumberComponent,
    DuoNumberBigComponent
  ],
  imports: [
    BrowserModule,
    SevenSegModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
