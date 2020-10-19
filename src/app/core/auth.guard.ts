import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { Router} from '@angular/router'
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{
    constructor(private authService: AuthService, private router: Router){} 

    canLoad() {
      return true  
    }

    canActivate() {
       // let isUser = (this.authService.currentUserName)? true: false
       
       return this.authService.isLoggeIn()
    }

    // canActivateChild() {
    //     return 
    // }
}