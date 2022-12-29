import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(private rest:ServiceService) { }

  public customers:any=[];
  public tabs:any={
    LISTVIEW:'ListView',
    GRIDVIEW:'GridView',
    MAPVIEW:'MapView',
    NEWCUSTOMER:'NewCustomer'
  }
  public selectedTab:any;
  public selectedCustomer:any;
  public customerForm:any=new FormGroup({
    firstname:new FormControl('', Validators.required),
    lastname:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    address:new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    this.selectedTab=this.tabs.GRIDVIEW;
    this.getCustomers();
  }



  getCustomers()
  {
    this.rest.getCustomers().subscribe((response:any)=>{
      console.log(response)
      this.customers=response;
    })
  }



  viewCustomer(id:any)
  {
    this.selectedCustomer=this.customers.find((item:any)=>item.id==id);
    this.selectedTab=this.tabs.MAPVIEW;
  }

  addCustomer()
  {
    let customerDetails=this.customerForm.value;
    let idArr:any=[this.customers.map((item:any)=>{return item.id})]
    customerDetails['id']=(Math.max.apply(Math,idArr[0])+1)
    this.rest.addCustomer(customerDetails).subscribe((response)=>{
      Swal.fire("Success","Customer added successfully","success");
      this.customerForm.reset();
      this.getCustomers();
    })
  }





}


