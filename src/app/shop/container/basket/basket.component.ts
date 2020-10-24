import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../authentification/services/auth-service/auth.service';
import { Good } from '../../../core/models/goods.interface';
import { CardService } from '../../../core/service/card-service/card.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  totalSum: number;
  username = this.authService.currentUserName;
  items: Good[];

  constructor(
    private authService: AuthService, 
    private cardService: CardService  
) {}

  ngOnInit(): void {
    this.cardService.getCard().subscribe( items => {
    this.items = items; 
    this.getTotalSum();     
    });

  }

  removeFromCard(event) {
    console.log(event)
    this.cardService.deleteGood(event);
  }

  getTotalSum() {
    this.totalSum = this.items.reduce((total, good) => {
      return total + parseFloat(good.cost.toString())
    }, 0)
  }
}
