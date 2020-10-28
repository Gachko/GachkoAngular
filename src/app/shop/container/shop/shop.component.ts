import { Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { from, fromEvent, Observable, Subscription, Subject } from 'rxjs';
import { tap, pluck, map, filter, debounceTime,distinctUntilChanged } from 'rxjs/operators';

import { MainGoodsService } from '../../services/mainGoods-service/main-goods.service';
import { Good } from '../../../models/goods.interface';
import { WishListService } from '../../../wish-list.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements AfterViewInit{

   @ViewChild('input', {static: false}) input: ElementRef;

   text; 
   subscription;
   goods: Good[];
   wishList;
   showSpinner = true;
   filter = [];



   ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'input').pipe(
      tap(e => console.log(e)),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.filter = [] ),
      filter(() =>this.input.nativeElement.value.trim()),
      tap(() => this.filter = this.goods.filter(good => good.author.includes(this.input.nativeElement.value))),
      tap(() => this.goods = this.filter)
    ).subscribe()
    this.input.nativeElement.value = ''
}

   
 


  constructor( 
    private mainGoodsService: MainGoodsService,
    private wishtListService: WishListService
    ) 
{
    this.mainGoodsService.getGoods().subscribe( goods=> {
      this.goods = goods;
      this.showSpinner = false
}); 
}

    

 
  searchGood(event) {
    
  }




  checkedGenre(event) {
    this.input.nativeElement.value = ''
    if(event === 'ALL') {
      this.goods = [];
      this.showSpinner = true;
      this.mainGoodsService.getGoods().subscribe( goods=> {
        this.goods = goods;
        this.showSpinner = false
      });
    }
    else {
      this.goods = [];
    this.showSpinner = true;
    this.mainGoodsService.getGoods().pipe(
      map(goods => goods.filter(good => good.genre === event.toString())),
    ).subscribe( goods=> {
      this.goods = goods;
      this.showSpinner = false;   
    });
    }
  }

  addToWishList(event) {

  this.wishtListService.addToWishList(event,this.goods);
  // this.mainGoodsService.getGoods().subscribe( goods=> {
  //   this.goods = goods;
  //   this.showSpinner = false
  // });


  }

  scrollTop() {
    window.scrollTo(0, 0);   
  }

}


