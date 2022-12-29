import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  getCustomers()
  {
    return  this.http.get(`http://localhost:9099/getCustomerdetails`);
  }

  getOrders()
  {
    return this.http.get(`http://localhost:9099/getordersdetails`)
  }

  addCustomer(customerDetails:any)
  {
    return this.http.post(`http://localhost:9099/postCustomerdata`,customerDetails,{responseType:'text'});
  }


}
