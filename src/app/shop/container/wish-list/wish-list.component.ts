import { Component,  OnInit } from '@angular/core';

import { MainGoodsService } from '../../../core/main-goods.service';
import { IGoods } from '../../../core/models/goods.interface';
import { from, fromEvent, Observable, Subscription } from 'rxjs';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

 wishList: IGoods[];


  
  constructor( private mainGoodsService: MainGoodsService, private store: Store ) { }

  ngOnInit(): void {
 
    this.wishList = ("wishList" in localStorage)?JSON.parse(localStorage.getItem('wishList')): []
 

  }



 

  

  removeToWishList(event) {


   console.log( event.id)
    
    this.wishList.forEach ( item => {
      if( item.id == event.id ) {
        
        this.mainGoodsService.wishList.splice( this.wishList.indexOf(item),1);
     
      }
    });

    this.wishList = this.wishList.filter(( item: IGoods) => {
     
      return item.id !== event.id
    })
   
   localStorage.setItem( 'wishList', JSON.stringify ( this.mainGoodsService.wishList));
   console.log(this.wishList)

  }
  

}
