import { Component, ViewChild, ElementRef,  DoCheck, AfterViewInit } from '@angular/core';
import {AuthService} from './core/service/auth-service/auth.service';


import { Router } from '@angular/router';


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
      exact: true,
      quantity:  0
    },
    {
      link: '/contacts',
      name: 'Контакты',
      exact: false
    }
  ];

  title = 'vinylShop';
  lengthWishList: number ;

  @ViewChild('navtoggle', { static: false }) navToggle: ElementRef;
  @ViewChild('menu', { static: false }) menu: ElementRef;
  @ViewChild('header', { static: false }) header: ElementRef;

  enter: string = this.authService.check?"Выйти":"Войти";

  constructor ( private authService: AuthService, 
                private router: Router ) {}

  isUser(){
    if ( this.authService.currentUser ) {
      this.authService.signout();
      this.authService.check = false;   
      this.router.navigate(['/login']);
    }
  }

  ngDoCheck() { 
    this.nav[4].quantity = ("basket" in localStorage)? JSON.parse(localStorage.getItem('basket')).length : null;
    this.nav[3].quantity = ("wishList" in localStorage)? JSON.parse(localStorage.getItem('wishList')).length : null;
    this.enter = this.authService.check?"Выйти":"Войти";
  }

  ngAfterViewInit() {
    this.header.nativeElement.classList.add('fixed');
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
