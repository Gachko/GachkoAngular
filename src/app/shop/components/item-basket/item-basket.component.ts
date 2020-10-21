import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGoods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-item-basket',
  templateUrl: './item-basket.component.html',
  styleUrls: ['./item-basket.component.scss']
})
export class ItemBasketComponent  {

  @Output() removeFromBasket = new EventEmitter();  
  @Input() items: IGoods;
  
  remove(good) {
    this.removeFromBasket.emit(good);
  }

}
