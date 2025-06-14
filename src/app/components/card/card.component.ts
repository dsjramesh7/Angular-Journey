import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // my code here
  public interpolationLearningSomething: string =
    'luffy pirate swordman deception';

  public todayDate(): string {
    return new Date().toLocaleDateString();
  }
  public nowTime(): string {
    return new Date().toLocaleTimeString();
  }
}
