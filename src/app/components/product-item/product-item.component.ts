import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  pname:string;
  image:string;
  qty:number;
  price:number;

}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //my code 
  public product:Product={
    sno: "AA101",
    pname:"iphone",
    image:"https://imgs.search.brave.com/o2k3y2XXNEq9ShaX0f0wIIRTpFr70nHwRl-AJKTWL_8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NzA4MDUyMy9waG90/by9oYW5kLWhvbGRp/bmctaXBob25lLTE0/LXByby10YWtpbmct/bW9iaWxlLXBob3Rv/LXdpdGgtc21hcnRw/aG9uZS1jYW1lcmEt/aXNvbGF0ZWQtb24t/d2hpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWF2RXR5/VUp1SFpYNWVGSy1y/NmZGQmtPRkpZWHRu/VmZkVE5vd3Uza1lR/dEE9",
    qty:2,
    price:1500
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
