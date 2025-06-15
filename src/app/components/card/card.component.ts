import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {
    this.updateTime();
  }
  ngOnInit(): void {}

  // my code here
  public interpolationLearningSomething: string =
    'luffy pirate swordman deception';

  public imageURL: string =
    'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  public time: string = new Date().toLocaleTimeString();

  public todayDate(): string {
    return new Date().toLocaleDateString();
  }
  public updateTime(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
}
