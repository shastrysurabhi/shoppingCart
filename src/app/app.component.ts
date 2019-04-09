import { Component } from '@angular/core';
import {JSON_CONFIG_FILENAME} from "tslint/lib/configuration";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Happy Shopping';
  cart = [];
  boxes = ['Chocolate', 'Cookies', 'Cakes', 'Ice Cream'];

  selectedItem(item) {
    let cartObject = {};
    if (this.cart.length === 0) {
      // first time adding into the cart
      cartObject[item] = 1;
      this.cart.push(cartObject);
    } else {
      console.log('inside else 1');
      this.cart.forEach(aKey => {
          if (aKey[item] !== undefined) {
            // already present increase the counter
            aKey[item] = aKey[item] + 1;
          } else {
            // not present in the cart, add new
            cartObject[item] = 1;
            this.cart.push(cartObject);
          }
      });
    }
    console.log('cart', this.cart);
/*    localStorage.cartItems = JSON.stringify(this.cart);*/
    alert(item + ' is added to Cart');
  }

  addNewItem(item) {
    if (this.boxes.indexOf(item) !== -1) {
      // already present
      alert(item + ' is already present');
    } else {
      // new item add
      this.boxes.push(item);
      alert(item + ' is added');
    }
  }
}
