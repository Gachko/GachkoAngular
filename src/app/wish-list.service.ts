import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishList = JSON.parse(localStorage.getItem('wishList'));

  removeToWishList(event) {
    // this.list.splice(this.list.indexOf(item), 1);
    this.wishList = this.wishList.filter((item) => {   
      return item.id !== event.id
    })   
   localStorage.setItem('wishList', JSON.stringify(this.wishList));
}

  addToWishList(event, goods) {
    goods.forEach(item => {
      if (item.id === event.id && this.wishList.indexOf(item) === -1) {
        this.wishList.push(item);   
      }
      else if (item.id === event.id && this.wishList.indexOf(item) !== -1) {
        this.wishList.splice(this.wishList.indexOf(item), 1);
      }
  });
    localStorage.setItem('wishList', JSON.stringify(this.wishList));
  }
}



