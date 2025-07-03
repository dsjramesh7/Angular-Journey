import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //code here
  public message:string = "";
  public maxCharCount = 40;



}
