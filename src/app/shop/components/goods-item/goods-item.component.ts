import { Component,Input, Output, EventEmitter } from '@angular/core';

import { IGoods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss']
})
export class GoodsItemComponent {


  @Input('items')
  items: IGoods;

  @Output()
  addToWishList: EventEmitter<any> = new EventEmitter();

  add(index) {  
   const item = this.items[index];
   this.addToWishList.emit(item)
  }

}
