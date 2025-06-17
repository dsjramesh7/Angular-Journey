import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // on code
  public greetingMessage: string = 'Hello Mugiwara';

  public updateMessage(msg: string): void {
    this.greetingMessage = msg;
  }
}
