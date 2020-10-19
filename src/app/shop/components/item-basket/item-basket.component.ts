import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGoods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-item-basket',
  templateUrl: './item-basket.component.html',
  styleUrls: ['./item-basket.component.scss']
})
export class ItemBasketComponent implements OnInit {

  @Output() removeFromBasket = new EventEmitter();
  
  @Input() items;

  constructor() { }

  ngOnInit(): void {
  }


  remove(good) {
    this.removeFromBasket.emit(good);
  }

}
