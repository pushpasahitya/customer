import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private rest:ServiceService) { }
  public orders:any;
  ngOnInit(): void {
    this.getOrders();
  }




  getOrders()
  {
    this.rest.getOrders().subscribe((response:any)=>{
      this.orders=response;
    })
  } 

}
