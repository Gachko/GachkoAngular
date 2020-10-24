import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goods } from '../../models/goods.interface';
import { map, tap, delay } from 'rxjs/operators';
import { Store } from '../../store';
import { Observable, VirtualTimeScheduler } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainGoodsService {

  wishList: Goods[] = [];
  basket: Goods[] = [];

  filtered;
  
  getItems$ = this.http.get<Goods[]>('api/goods').pipe(tap(next => this.store.set('goods', next)));
 
  goodsCollection: AngularFirestoreCollection<Goods>;
  goods: Observable<Goods[]>;

  constructor(private http: HttpClient, private store: Store,
               private afs: AngularFirestore) 
  {
      this.goodsCollection = this.afs
      .collection('goods', ref => ref.orderBy('id', 'asc'));

      
  }

 filteredCollection = this.afs.collection('goods', ref => ref.where("genre", "==", "POP"));

  // getFilter() {
  //   this.filtered = this.filteredCollection.snapshotChanges().pipe(
  //     delay(2000),
  //     map(changes => {
  //       return changes.map(action => {
  //         const data = action.payload.doc.data() as Goods;
  //         //data.id = action.payload.doc.id;
  //         return data;
  //       });
  //     })
  //   );

  //   return this.filtered;
  // }

  getGoods(): Observable<Goods[]> {
    this.goods = this.goodsCollection.snapshotChanges().pipe(
      delay(2000),
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Goods;
          //data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.goods;
  }  


  getGood(id: number | string) {
    return this.getItems$.pipe(
      map((goods: Goods[]) => goods.find(item => item.id === +id))
    );
  }




  









  getPop(event) {}

  


  fireQuery(start,end) {
    return this.afs.collection('goods', ref => ref.limit(52).orderBy('id').startAt(start).endAt(end)).valueChanges()
  }

}

