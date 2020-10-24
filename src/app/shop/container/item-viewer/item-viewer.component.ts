import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { MainGoodsService } from '../../../core/service/mainGoods-service/main-goods.service';
import { Goods } from '../../../core/models/goods.interface';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss']
})
export class ItemViewerComponent implements OnInit {

  good: Observable<Goods>;
  
  @ViewChild('notice', {static: false})notice: ElementRef;

  constructor (
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private service: MainGoodsService,
    private elementRef:ElementRef,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.good = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGood(params.get('id')))
    );
}




  add(event) {
    console.log(event);
    const value = this.store.value.goods;

    if (this.authService.check) {
      value.forEach(item => {
      if (item.id == event.id && this.service.basket.indexOf(item) == -1) {
        this.service.basket.push(item);        
      }
    }
    );

    this.notice.nativeElement.style.display  = "block";
    setTimeout(() => {
      this.notice.nativeElement.style.display  = "";
    }, 800
    );  
    localStorage.setItem('basket', JSON.stringify(this.service.basket));
  }
   else {
    this.router.navigate(['/login'])    
   }
}


}


