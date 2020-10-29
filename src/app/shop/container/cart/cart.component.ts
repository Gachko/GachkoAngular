import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

import { Good } from '../../../models/goods.interface';
import { AuthService} from '../../../authentification/services/auth-service/auth.service';
import { CartService } from '../../services/cart-service/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('list', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ])
    ])
  ]
})
export class CartComponent implements OnInit {

  totalSum: number;
  username = this.authService.currentUserName;
  items: Good[];
  showSpinner = true;
  modalVisible = false;

  constructor(
    private authService: AuthService, 
    private cartService: CartService  
) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe( items => {
    this.items = items; 
    this.getTotalSum();
    this.showSpinner = false;     
    });
  }

  removeFromCart(event) {
    console.log(event)
    this.cartService.deleteGood(event);
  }

  getTotalSum() {
    this.totalSum = this.items.reduce((total, good) => {
      return total + parseFloat(good.cost.toString())
    }, 0)
  }

  order() {
    this.modalVisible = true;
    setTimeout(() => {
      this.modalVisible = false;
    }, 2000)
   
  }
}


