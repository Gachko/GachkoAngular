import { Component, ContentChild, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription, Subject, combineLatest } from 'rxjs';
import { MainGoodsService } from '../../../core/service/mainGoods-service/main-goods.service';
import { Goods } from '../../../core/models/goods.interface';
import { Store } from '../../../core/store';
import { debounceTime, distinctUntilChanged, map, switchAll, switchMap, tap, filter } from 'rxjs/operators'
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  @ViewChild('field', {static: false}) field: ElementRef;

 
  text 
  subscription: Subscription;
  goods;

  spinner = true;

  constructor(private store: Store,
              private mainGoodsService: MainGoodsService) { }

  ngOnInit() {

  this.mainGoodsService.getGoods().subscribe( goods=> {
    this.goods = goods;
    this.spinner = false
    });

    
  }
  ngAfterViewInit() {
  
  }


  searchGood(event) {

    console.log(event)
  }

 

  checkedGenre(event) {}


  addToWishList(event) {
    this.goods.forEach(item => {
      if (item.id == event.id && this.mainGoodsService.wishList.indexOf(item) == -1) {
        item.favourite = true;
        console.log(item)
        this.mainGoodsService.wishList.push(item);  
      }
      else {
        if (item.id == event.id && this.mainGoodsService.wishList.indexOf(item) != -1) {   
          item.favourite = false; 
          this.mainGoodsService.wishList.splice(this.mainGoodsService.wishList.indexOf(item), 1); 
          localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));
        }
      }
    }
    );   
    localStorage.setItem('wishList', JSON.stringify(this.mainGoodsService.wishList));
  }

  
  scrollTop() {
    window.scrollTo(0, 0);   
  }

  



}


