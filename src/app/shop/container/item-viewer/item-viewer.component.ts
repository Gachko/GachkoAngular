import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap  } from 'rxjs/operators';

import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { Good } from '../../../models/goods.interface';
import { CartService } from '../../services/cart-service/cart.service'
import { GoodsService } from 'src/app/goods.service';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss']
})
export class ItemViewerComponent implements OnInit {

  @ViewChild('notice', {static: false})notice: ElementRef;
  
  good: Observable<Good>;
  id: string;
  showSpinner = true;
  
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private goodsService: GoodsService
    ) {}

  ngOnInit(): void {
    this.good = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.goodsService.getGood(params.get('id'))),
      tap(() => this.showSpinner = false)
  );
}

  addToCard(event) {
    if ( this.authService.check ) {
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


