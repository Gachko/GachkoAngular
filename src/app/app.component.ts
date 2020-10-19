import { Component, ViewChild, ElementRef,  DoCheck, OnInit,  AfterViewInit } from '@angular/core';
import { MainGoodsService } from './core/main-goods.service';
import {AuthService} from './core/service/auth.service';


import { Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  // Event as RouterEvent,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError} from '@angular/router';


interface INav {
  link: string,
  name: string,
  exact: boolean,
  quantity?: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  DoCheck, AfterViewInit {



  loading;

  lengthWishList: number ;

  @ViewChild('navtoggle', { static: false }) navToggle: ElementRef;
  @ViewChild('menu', { static: false }) menu: ElementRef;
  @ViewChild('header', { static: false }) header: ElementRef;

  enter: string = (this.authService.currentUser)?"Выйти":"Войти"


  constructor (private authService: AuthService, private router: Router) {
        // this.router.events.subscribe((routerEvent: Event) => {
        //   if( routerEvent instanceof NavigationStart ) {
        //     this.loading = true;
        //   }

        //   if( routerEvent instanceof NavigationEnd ) {
        //     this.loading = false;
        //   }
        // })


        // router.events.subscribe((event: RouterEvent) => {
        //   switch (true) {
        //     case event instanceof NavigationStart: {
        //       this.loading = true;
        //       break;
        //     }
        //     case event instanceof NavigationEnd:
        //     case event instanceof NavigationCancel:
        //     case event instanceof NavigationError: {
        //       this.loading = false;
        //       break;
        //     }
        //     default: {
        //       break;
        //     }
        //   }
        // });
  }

 
 
  isUser(){
   
    if(this.authService.currentUser) {
      this.authService.signout();
      
    }
  }
  ngDoCheck() {
  //  this.lengthWishList = JSON.parse(localStorage.getItem('wishList')).length || null;

   this.nav[3].quantity = ("wishList" in localStorage)? JSON.parse(localStorage.getItem('wishList')).length : null;
   //JSON.parse(localStorage.getItem('wishList')).length;
   this.enter = (this.authService.currentUser)?"Выйти":"Войти"
  }


  title = 'vinylShop';

  nav: INav[] = [
    {
      link: '/',
      name: 'Главная',
      exact: true
    },
    {
      link: '/care',
      name: 'Уход',
      exact: true
    },
    {
      link: '/shop',
      name: 'Магазин',
      exact: true
    },
    {
      link: '/wishList',
      name: 'Избранное',
      exact: true,
      quantity:  0
    },
    {
      link: '/basket',
      name: 'Корзина',
      exact: true
    },
    {
      link: '/contacts',
      name: 'Контакты',
      exact: false
    },
    // {
    //   link: '/login',
    //   name: 'Войти',
    //   exact: false
    // }
  ];

  ngAfterViewInit() {
    this.header.nativeElement.classList.add('fixed');
  //  this.enter.nativeElement.innerHTML = "Войти"
  }

  openMenu() {

    if (this.navToggle.nativeElement.classList.contains('active')) {
      this.navToggle.nativeElement.classList.remove('active')
    } else {
      this.navToggle.nativeElement.classList.add('active')
    }

    if (this.menu.nativeElement.classList.contains('active')) {
      this.menu.nativeElement.classList.remove('active')
    } else {
      this.menu.nativeElement.classList.add('active')
    }

  }
}
