import { Component,  OnInit, DoCheck } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Store } from '../../../store';
import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit, DoCheck {

 wishList: Observable<Good[]>;
 counter = localStorage.length;

 constructor( private store: Store ) {}

  ngOnInit(): void {
   this.wishList =  this.store.select('goods')
   .pipe(
     filter(Boolean),
     map((goods: any[]) => goods.filter(item => 
      item.favourite))
   )
}

  ngDoCheck() {
    this.counter = localStorage.length;
}
 
  removeToWishList(event) {
    const value = this.store.value.goods;
    const goods = value.map ((item) => {
      if ( event.item.id === item.id ) {      
      localStorage.removeItem(event.item.id);     
        return {...item, ...event.item}
      } else return item
    })
    this.store.set('goods', goods);
}

}

