import { Component } from '@angular/core';


import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-products';
  products = products;  
  
  share(){
    window.alert("The product has been shared!")
  }

  onNotify(){
    window.alert("You will be notify when the product goes on sale");
  }
}
