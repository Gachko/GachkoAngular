import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGoods } from './models/goods.interface';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from './store'

const GOODS_API: string = 'api/goods';

@Injectable({
  providedIn: 'root'
})
export class MainGoodsService {

  wishList: IGoods[] = [];
  basket: IGoods[] = [];
  loading: boolean = false;



  constructor(private http: HttpClient, private store: Store) {

   }

  getItems$ = this.http.get<IGoods[]>('api/goods').pipe(tap(next => this.store.set('goods', next)));

  //wish = JSON.parse(localStorage.getItem('wishList'));

  //getWishes$ = of(this.wish).pipe(tap(next => this.store.set('wish', next)))


  




  getPop(event) {


    // const value = this.store.value.goods;
    // this.store.set('goods', value)
    //  let filtered = [];
    //  let other = []
    //   let items = value.filter((item) => {
    //     if( item.genre === event.radio.genre ) {
    //       filtered = {...item};
    //       return filtered
    //     }
    //     else  if(item.genre !== event.radio.genre ) {
    //         other = item
    //         return other
    //     }



    //   })

    //   this.store.set('goods', items)


  }




  localSto(event) {
    const value = this.store.value.goods;

    value.forEach(item => {
      if (item.id == event.id && this.wishList.indexOf(item) == -1) {
        this.wishList.push(item);
      }
      else {
        if (this.wishList.indexOf(item) != -1) {
          delete this.wishList[item.id]
        }
      }
    }
    );


    localStorage.setItem('wishList', JSON.stringify(this.wishList));
  }

  

  getGood(id: number | string) {
    return this.getItems$.pipe(
      map((goods: IGoods[]) => goods.find(item => item.id === +id))
    );
  }


}

