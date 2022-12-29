import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{path:"", component:PagesComponent, children:[
  {path:"home", component:HomeComponent},
  {path:"customers", component:CustomersListComponent},
  {path:"orders", component:OrdersComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
