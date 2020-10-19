import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { from, fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { MainGoodsService } from '../../../core/main-goods.service';
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
  filteredgoods;
  loading: boolean = true;
  constructor(private store: Store, private mainGoodsService: MainGoodsService) { }

  ngOnInit() {
    this.goods = this.store.select('goods');

    this.subscription = this.mainGoodsService.getItems$.subscribe(_ => this.loading = false);
   
    console.log(this.loading)
  }


 



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

  checkedGenre(event) {
    this.mainGoodsService.getPop(event);
  }


  check () {

    return true;
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
          console.log('d')
          
          this.mainGoodsService.wishList.splice(this.mainGoodsService.wishList.indexOf(item), 1);
   
          localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));
          //return;
        }
      }
    }
    );

    console.log(this.mainGoodsService.wishList)
   
    localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));


  }



}


