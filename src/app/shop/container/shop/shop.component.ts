import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { Good } from '../../../models/goods.interface';
import { GoodsService } from '../../../goods.service';
import { Store } from '../../../store'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy, AfterViewInit{

  @ViewChild('input', {static: false}) input: ElementRef;

   showSpinner = true;
   filtered: Good[] = [];
   goods: Observable<Good[]>;
   subscription: Subscription;

  constructor( 
    private goodsService: GoodsService,
    private store: Store
) {}

ngOnInit() {

  this.goods = this.store.select('goods');
  this.subscription = this.goodsService.getGoods.pipe(
      map(goods => goods.map( good => {
        if ( good.id in localStorage ) {
          good.favourite = true
        }
      })
    )
  )   
  .subscribe( _ => this.showSpinner = false );
}

ngAfterViewInit() {
   fromEvent(this.input.nativeElement, 'input').pipe(
    debounceTime(1500)
   ).subscribe(()=> {
      this.filtered = this.store.value.goods.filter( item => item.name.includes(this.input.nativeElement.value) 
                                                    || item.author.includes(this.input.nativeElement.value))
})



}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

checkedGenre(event) {
    this.filtered = []
    if( event === 'All') {
      return
    }
    const value = this.store.value.goods;
    value.forEach(element => {
        if (element.genre === event.toString()) {
          this.filtered.push(element)
        }
    });
}
 
  addToWishList(event) {
    const value = this.store.value.goods;
    const goods = value.map ((item) => {
      if ( event.item.id === item.id ) {
        if(!(event.item.id in localStorage)) {
          localStorage.setItem(event.item.id, 'true')
        } else {
          localStorage.removeItem(event.item.id);
        }
       
        return {...item, ...event.item}
      } else return item
    })
    this.store.set('goods', goods)
}

  scrollTop() {
    window.scrollTo(0, 0);   
}

}


