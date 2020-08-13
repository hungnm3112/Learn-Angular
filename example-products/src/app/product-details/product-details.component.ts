import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],  
})

export class ProductDetailsComponent implements OnInit {
  product : {id:4,name:'abc',description:'xyz',price:0};
  constructor(
    private route : ActivatedRoute,
    private catService : CartService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{      
      this.product = products[params.get('productId')];
      console.log(this.product);
    });
  }

  addToCart(product){
    this.catService.addToCart(product);
    window.alert("Your product has been add to cart!")
  }

}
