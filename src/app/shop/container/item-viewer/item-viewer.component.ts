import { isPlatformServer } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params,  ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, pluck  } from 'rxjs/operators';
import { MainGoodsService } from '../../../core/main-goods.service';
import { IGoods } from '../../../core/models/goods.interface';
import { Store } from '../../../core/store';

@Component({
  selector: 'app-item-viewer',
  templateUrl: './item-viewer.component.html',
  styleUrls: ['./item-viewer.component.scss']
})
export class ItemViewerComponent implements OnInit, OnDestroy {

  good: Observable<IGoods>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  private router: Router,
  private service: MainGoodsService
  ) { }

  ngOnInit(): void {
    this.good = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGood(params.get('id')))
    );
}

add(event) {
  console.log(event);
  const value = this.store.value.goods;
   
  value.forEach(item => {
    if (item.id == event.id && this.service.basket.indexOf(item) == -1) {
      this.service.basket.push(item);
     
      
    }
  }
  );

  console.log(this.service.basket)
 
  localStorage.setItem('basket', JSON.stringify(this.service.basket));
}


ngOnDestroy() {
  
}

}


