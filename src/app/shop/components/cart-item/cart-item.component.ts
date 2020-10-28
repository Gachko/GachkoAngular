import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  animations: [

    trigger('item', [
      state('out', style({
        transform: 'translateX(100px)',
        opacity: 0
      })),
      transition('* => out', animate('0.4s ease'))
    ]),


    trigger('photoState', [
      state('enlarge', style( {
        transform: 'scale(1.5)'
      })),
      transition('* => enlarge', animate('0.4s ease')),
    ])
  ]
})
export class CartItemComponent  {

  @Output() removeFromCart = new EventEmitter();  
  @Input() item: Good;

  size: string;
  state: string;
  
  remove(good) {
    this.state = 'out';
    console.log(this.state)
    this.removeFromCart.emit(good);
  }

  changeSize() {
    this.size = (this.size === '') ? 'enlarge' : '';
  }

}
