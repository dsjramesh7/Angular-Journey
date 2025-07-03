import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //code here
  public typeText:string = "password";

  public updateTypeText(e:any):void{
    if(e.target.checked){
      this.typeText = "text";
    }else{
      this.typeText = "password"
    }
  }

}
