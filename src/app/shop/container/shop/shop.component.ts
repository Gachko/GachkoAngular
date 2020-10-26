import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainGoodsService } from '../../services/mainGoods-service/main-goods.service';
import { Good } from '../../../models/goods.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  @ViewChild('field', {static: false}) field: ElementRef;

 
  text; 
  
  goods: Good[];
  wishList: Good[];
  showSpinner = true;

  constructor( private mainGoodsService: MainGoodsService ) { }

  ngOnInit() {

  this.mainGoodsService.getGoods().subscribe( goods=> {
    this.goods = goods;
    this.showSpinner = false
  });

  this.wishList   = JSON.parse(localStorage.getItem('wishList')) || [];
 
  }
 
  searchGood(event) {
    console.log(event)
  }

  checkedGenre(event) {}

  addToWishList(event) {
    this.goods.forEach(item => {
      if (item.id == event.id && this.wishList.indexOf(item) == -1) {
        item.favourite = true;
        this.wishList.push(item);  
        localStorage.setItem('wishList', JSON.stringify(this.wishList));
      }
      else {
        if (item.id == event.id && this.wishList.indexOf(item) != -1) {   
          item.favourite = false; 
          this.wishList.splice(this.wishList.indexOf(item), 1); 
          localStorage.setItem('wishList', JSON.stringify(this.wishList));
        }
      }
    }
    );   
    localStorage.setItem('wishList', JSON.stringify(this.wishList));
}

  scrollTop() {
    window.scrollTo(0, 0);   
  }
}


