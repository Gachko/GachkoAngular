import { Injectable } from '@angular/core';
import { Good } from '../../../models/goods.interface';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainGoodsService {

  
  goodsCollection: AngularFirestoreCollection<Good>;
  goodDoc: AngularFirestoreDocument<Good>;
  goods: Observable<Good[]>;
  good;

  constructor( private afs: AngularFirestore ) 
  {
      this.goodsCollection = this.afs
      .collection('goods', ref => ref.orderBy('id', 'asc'));    
      // this.goodsCollection = this.afs
      // .collection(('goods'), ref => ref.where('genre', '==', 'POP')  )    
  }


  getGenre(genre) {
    // this.goodsCollection = this.afs
    //   .collection(('goods'), ref => ref.where('genre', '==', genre.toString())  )  
  }

  getGoods(): Observable<Good[]> {
    this.goods = this.goodsCollection.snapshotChanges().pipe(
      delay(1000),
      map(goods => {
        return goods.map(goods => {
          const data = goods.payload.doc.data() as Good;
          data.id = goods.payload.doc.id;
          return data;
        });
      })
    );
    return this.goods;
  }  


  getGood(id: number | string): Observable<Good> {
    this.goodDoc = this.afs.doc<Good>(`goods/${id}`);
      this.good = this.goodDoc.snapshotChanges().pipe(
        delay(700),
        map(action => {        
            const data = action.payload.data() as Good;
            data.id = action.payload.id;
            return data;
      
        })
      );

      return this.good;
  }


  getPop(event) {}


  fireQuery(start,end) {
    return this.afs.collection('goods', ref => ref.limit(52).orderBy('id').startAt(start).endAt(end)).valueChanges()
  }

}

