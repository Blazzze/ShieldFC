import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-duo-number',
  templateUrl: './duo-number.component.html',
  styleUrls: ['./duo-number.component.scss']
})
export class DuoNumberComponent implements OnInit {

  @Input() value: number;
  num1: number;
  num2: number;

  constructor() { }

  ngOnInit(): void {
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
