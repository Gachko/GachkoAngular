import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Good } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-item-basket',
  templateUrl: './item-basket.component.html',
  styleUrls: ['./item-basket.component.scss']
})
export class ItemBasketComponent  {

  @Output() removeFromCard = new EventEmitter();  
  @Input() items: Good;
  
  remove(good) {
    this.removeFromCard.emit(good);
  }

}
