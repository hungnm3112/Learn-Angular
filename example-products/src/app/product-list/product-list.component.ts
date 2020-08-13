import { Component, OnInit } from '@angular/core';

import{ products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;  
  title = 'List product';

  constructor(){}
  ngOnInit(){}
  
  share(){
    window.alert("The product has been shared!")
  }

  onNotify(){
    window.alert("You will be notify when the product goes on sale");
  }
}
