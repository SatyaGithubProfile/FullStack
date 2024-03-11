import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { AlertMessageComponent } from './alert-message/alert-message.component';


const routes: Routes = [

  // { path: '', component: CustomersComponent },
  { path: 'customers', component: CustomersComponent, canActivate:[AuthService] },
  { path: 'products', component: ProductsComponent },
  // { path: '**', redirectTo : '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    CustomersComponent,
    ProductsComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers : [
  ]
})
export class ShoppingModule { }
