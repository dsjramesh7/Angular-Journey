import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


  // all code here
  public userName:string = ""

  public updateName(e:any):void{
    this.userName = e.target.value;
  }

}
