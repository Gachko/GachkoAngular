import { Component,  OnInit } from '@angular/core';
import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

 wishList: Good[];

 constructor() { }

  ngOnInit(): void {
    this.wishList = ("wishList" in localStorage)?JSON.parse(localStorage.getItem('wishList')): []
  }

  removeToWishList(event) {
    this.wishList.forEach ( item => {
      if( item.id == event.id ) {
          this.wishList.splice( this.wishList.indexOf(item),1);
          item.favourite = false;
      }
});
    this.wishList = this.wishList.filter(( item: Good) =>  item.id !== event.id)
   
    localStorage.setItem( 'wishList', JSON.stringify ( this.wishList));
  }
}
