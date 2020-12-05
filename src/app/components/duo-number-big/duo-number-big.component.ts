import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-duo-number-big',
  templateUrl: './duo-number-big.component.html',
  styleUrls: ['./duo-number-big.component.scss']
})
export class DuoNumberBigComponent implements OnChanges {

  @Input() value: number;
  num1: number;
  num2: number;

  constructor() { }

  ngOnChanges(): void {
    if (this.value < 10) {
      this.num1 = 0;
      this.num2 = this.value;
    }
    else {
      this.num1 = Math.floor(this.value / 10);
      this.num2 = Math.floor(this.value % 10);
    }

  }

}
