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
  wishList: Good[]
  
  showSpinner = true;

  constructor( private mainGoodsService: MainGoodsService ) { }

  ngOnInit() {

  this.mainGoodsService.getGoods().subscribe( goods=> {
    this.goods = goods;
    this.showSpinner = false
  });

  this.wishList = JSON.parse(localStorage.getItem('wishList')) ;
  }
 
  searchGood(event) {

  }


  checkedGenre(event) {
  
    console.log(event)
  }

  addToWishList(event) {
    console.log(this.wishList)
    this.goods.forEach(item => {
      if (item.id == event.id && this.wishList.indexOf(item) === -1) {
        this.wishList.push(item);  
        
        localStorage.setItem('wishList', JSON.stringify(this.wishList));
      }
      else {
        if (item.id == event.id && this.wishList.indexOf(item) !== -1) {   
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


