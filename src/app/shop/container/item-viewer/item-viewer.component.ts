import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { MainGoodsService } from '../../services/mainGoods-service/main-goods.service';
import { Good } from '../../../models/goods.interface';
import { CartService } from '../../services/cart-service/cart.service'

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss']
})
export class ItemViewerComponent implements OnInit {

  good: Good;
  id: string;
  showSpinner = true;
  
  @ViewChild('notice', {static: false})notice: ElementRef;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private service: MainGoodsService,
    private authService: AuthService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.service.getGood(this.id).subscribe( good => {
      this.good = good;
      this.showSpinner = false;
    }
  )
}

  addToCard(event) {
    if (this.authService.check) {
    this.notice.nativeElement.style.display  = "block";
    setTimeout(() => {
      this.notice.nativeElement.style.display  = "";
    }, 800
    );  
    this.cartService.addGood(event);
  }
   else {
    this.router.navigate(['/login'])    
   }
}

}


