import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IGoods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss']
})
export class GoodsItemComponent implements OnInit {

  id = 3;

  @Input('items')
  items;



  @Output()
  addToWishList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(index) {
    
   const item = this.items[index];
   this.addToWishList.emit(item)
  }

}
