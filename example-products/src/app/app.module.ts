import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { AppRoutingModule } from './app-routing.module';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,    
    ProductAlertComponent, 
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
