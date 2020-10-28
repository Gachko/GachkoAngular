import { Component,  OnInit } from '@angular/core';

import { Good } from '../../../models/goods.interface';
import { WishListService } from '../../../wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

 wishList: Good[];

 constructor( public wishtListService: WishListService

) {}

  ngOnInit(): void {
   this.wishList = JSON.parse(localStorage.getItem('wishList'))
  }

 

  removeToWishList(event) {
    this.wishtListService.removeToWishList(event);
  
}
}
