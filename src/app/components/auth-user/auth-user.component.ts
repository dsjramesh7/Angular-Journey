import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css'],
})
export class AuthUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //code here
  public isLoggedIn: boolean = false;

  public loginUser(): void {
    this.isLoggedIn = true;
  }

  public logOutUser(): void {
    this.isLoggedIn = false;
  }
}
