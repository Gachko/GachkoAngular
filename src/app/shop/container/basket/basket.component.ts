import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../authentification/services/auth-service/auth.service';
import { MainGoodsService } from '../../../core/service/mainGoods-service/main-goods.service';
import { Goods } from '../../../core/models/goods.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  sum: number;
  username = this.authService.currentUserName;
  items: Goods[];

  constructor(private authService: AuthService, 
              private mainGoodService: MainGoodsService ) {}

  ngOnInit(): void {
    this.items = ("basket" in localStorage)?JSON.parse(localStorage.getItem('basket')): [];
  }

  ngDoCheck () {
    this.sum = this.mainGoodService.basket.reduce((sum, item) => { return item.cost + sum }, 0)
  }

  removeFromBasket(event) {
    console.log(event);
    this.items.forEach ( item => {
      if( item.id == event.id ) {   
        this.mainGoodService.basket.splice( this.items.indexOf(item),1);    
      }
    });
    this.items = this.items.filter(( item: Goods) => {   
      return item.id !== event.id
    })  
   localStorage.setItem( 'basket', JSON.stringify ( this.mainGoodService.basket)); 
  }
}
