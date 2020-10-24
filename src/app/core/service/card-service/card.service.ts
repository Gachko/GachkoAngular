import { Injectable } from '@angular/core';
import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { MainGoodsService } from '../mainGoods-service/main-goods.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Good } from '../../../core/models/goods.interface';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardGoods: Observable<Good[]>;
  clientDoc: AngularFirestoreDocument<Good>;
  counter: number = 0;

  constructor( 
    private afs: AngularFirestore,
    private goodsSeervice: MainGoodsService,
    private authService: AuthService 
    ) {}

getCard(): Observable<Good[]> {
  this.cardGoods = this.authService.getAuth().pipe(
    switchMap(user => {
      if ( user ) {
        return this.afs
          .doc<any>(`cards/${user.uid}`)
          .collection('goods', ref => ref.orderBy('id', 'asc'))
          .snapshotChanges().pipe(
            map(changes => {
              return changes.map(action => {
                const data = action.payload.doc.data() as Good;
                  data.id = action.payload.doc.id;
                  return data;
              });
            })
          );
        } else {
          return of([]);
        }
    })
  );
  
  
  return this.cardGoods;
}


addGood(good: Good) {
  
  this.authService.getAuth().pipe(
    switchMap((user) => {
      return this.afs.collection<any>(`cards/${user.uid}/goods`)
      .add(good)
    })
  ).subscribe();
}

deleteGood(good: Good) {
  this.authService.getAuth().pipe(
    switchMap((user) => {
      this.clientDoc = this.afs.doc(`cards/${user.uid}/goods/${good.id}`);
      return this.clientDoc.delete();
    })
  ).subscribe();
}


}


