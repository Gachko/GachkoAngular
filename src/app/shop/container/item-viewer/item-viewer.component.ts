import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../authentification/services/auth-service/auth.service';
import { MainGoodsService } from '../../../core/service/mainGoods-service/main-goods.service';
import { Good } from '../../../core/models/goods.interface';
import { CardService } from '../../../core/service/card-service/card.service'

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
    private cardService: CardService
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
    this.cardService.addGood(event);
  }
   else {
    this.router.navigate(['/login'])    
   }
}

}


