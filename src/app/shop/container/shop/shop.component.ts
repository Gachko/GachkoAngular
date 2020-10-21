import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MainGoodsService } from '../../../core/service/mainGoods-service/main-goods.service';
import { IGoods } from '../../../core/models/goods.interface';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {


  goods: Observable<IGoods[]>;
  subscription: Subscription;

  constructor(private store: Store,
              private mainGoodsService: MainGoodsService) { }

  ngOnInit() {
    this.goods = this.store.select('goods');
    this.subscription = this.mainGoodsService.getItems$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkedGenre(event) {
    this.mainGoodsService.getPop(event);
  }


  addToWishList(event) {
    const value = this.store.value.goods; 
    value.forEach(item => {
      if (item.id == event.id && this.mainGoodsService.wishList.indexOf(item) == -1) {
        item.favourite = true;
        this.mainGoodsService.wishList.push(item);    
      }
      else {
        if (item.id == event.id && this.mainGoodsService.wishList.indexOf(item) != -1) {   
          this.mainGoodsService.wishList.splice(this.mainGoodsService.wishList.indexOf(item), 1); 
          localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));    
        }
      }
    }
    );   
    localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));
  }
}


