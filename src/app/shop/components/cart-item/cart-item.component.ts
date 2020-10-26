import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent  {

  @Output() removeFromCart = new EventEmitter();  
  @Input() items: Good;
  
  remove(good) {
    this.removeFromCart.emit(good);
  }

}
