import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGoods } from '../../models/goods.interface';
import { map, tap } from 'rxjs/operators';
import { Store } from '../../store'



@Injectable({
  providedIn: 'root'
})
export class MainGoodsService {

  wishList: IGoods[] = [];
  basket: IGoods[] = [];
  loading: boolean = false;



  constructor(private http: HttpClient, private store: Store) {}

  getItems$ = this.http.get<IGoods[]>('api/goods').pipe(tap(next => this.store.set('goods', next)));

  getPop(event) {}

  getGood(id: number | string) {
    return this.getItems$.pipe(
      map((goods: IGoods[]) => goods.find(item => item.id === +id))
    );
  }


}

