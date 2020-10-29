import { Component,Input, Output, EventEmitter } from '@angular/core';

import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent {

  @Input('goods')
  goods: Good[];

  @Output()
  addToWishList: EventEmitter<any> = new EventEmitter();

  add(index, prop) {
    const item = this.goods[index];
    this.addToWishList.emit({
    item: {...item, [prop]: !item[prop] }
    }
  )
}

}
