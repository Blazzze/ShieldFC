import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-segment',
  templateUrl: './simple-segment.component.html',
  styleUrls: ['./simple-segment.component.scss']
})
export class SimpleSegmentComponent implements OnInit {

  @Input() seconds: number;
  @Input() miliseconds: number;
  @Input() minutes: number;

  constructor() {
    console.log("this.minutes", this.minutes);
    console.log("this.miliseconds", this.miliseconds);
    console.log("this.seconds", this.seconds);

  }

  ngOnInit(): void {
    console.log("HEEEEEREEE");
  }

}
