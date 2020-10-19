import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
@Injectable()
export class Preloader implements Resolve<any> {
    constructor(private http: HttpClient, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    //   return this.http.get<any[]>('api/goods').pipe(
    //     tap(
    //         res => of(res),
    //         err => {
    //           this.router.navigate(['/'])
    //           return 
    //         }
    //       )
    //   )
   
  }
}