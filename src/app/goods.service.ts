import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';

import { Good } from './models/goods.interface';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  goods: Observable<Good[]>;
  wishList: Good[] = [];
 
  constructor( 
    private afs: AngularFirestore,
    private store: Store 
  ) {}

  getGoods = this.afs.collection('goods', ref => ref.orderBy('id', 'asc')).snapshotChanges().pipe(
    delay(1000),
    map(goods => goods.map(goods => {
        const data = goods.payload.doc.data() as Good;
        data.id = goods.payload.doc.id;
        return data
      }),      
  ),
  tap(next => this.store.set('goods', next))
);


  getGood(id: string) {
    return this.getGoods.pipe(
      map((goods: Good[]) => goods.find(item => item.id === id))
  )     
}


}



