import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //code here
  public isFlag:boolean = false;
  public imageURL:string = "https://photosly.in/wp-content/uploads/2024/03/anime-dp56.jpg";

  
}
