import { Component,Input, Output, EventEmitter } from '@angular/core';

import { Goods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss']
})
export class GoodsItemComponent {

  searchStr= ''

  @Input('items')
  items: Goods;

  @Output()
  addToWishList: EventEmitter<any> = new EventEmitter();

  add(index) {  
   const item = this.items[index];
   this.addToWishList.emit(item)
  }

}
