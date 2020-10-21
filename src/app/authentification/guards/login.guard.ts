import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService } from '../../core/service/auth.service'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private  authService: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(auth => {
        if (auth) {
          this.authService.check = true;
          this.router.navigate(['/basket']);
          return false;
        } else {
         return true;
        }
      })
    );
  }

}

