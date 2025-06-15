import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // my code
  public count: number = 0;

  public incrementCounter(): void {
    if (this.count === 69) {
      return;
    }
    this.count = this.count + 1;
  }

  public decrementCounter(): void {
    // if (this.count === 0) {
    //   return;
    // }
    this.count = this.count - 1 > 0 ? this.count - 1 : 0;
  }

  public TheGreatReset(): void {
    this.count = 0;
  }
}
