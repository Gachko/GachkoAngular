import { Injectable } from '@angular/core';
import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Good } from '../../../models/goods.interface';
import { Observable, of } from 'rxjs';
import { map, switchMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartGoods: Observable<Good[]>;
  clientDoc: AngularFirestoreDocument<Good>;
  counter: number = 0;

  constructor( 
    private afs: AngularFirestore,
    private authService: AuthService 
  ) {}

getCart(): Observable<Good[]> {
  this.cartGoods = this.authService.getAuth().pipe(
    switchMap(user => {
      if ( user ) {
        return this.afs
          .doc<any>(`cards/${user.uid}`)
          .collection('goods', ref => ref.orderBy('id', 'asc'))
          .snapshotChanges().pipe(
            delay(600),
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
  
  
  return this.cartGoods;
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

checkGood( good: Good, user): any {
     this.afs.collection<any>(`cards/${user.uid}/goods`)
     .ref.where('id', '==', good.id)
     .get().then((ref) => {
       let res = ref.docs.map(doc => doc.data() as Good)
       if(res.length > 0) return true;
       else return false;
     })
  }

}





