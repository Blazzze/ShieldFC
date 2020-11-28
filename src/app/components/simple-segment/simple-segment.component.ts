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

  }

  ngOnInit(): void {
  }

}
