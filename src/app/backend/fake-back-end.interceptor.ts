import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from './endpoints';
import { checkUrl } from './helpers';
import { getGoods } from './routes';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    
    const { body } = request;

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case checkUrl(request, endpoints.catalog.products):
          return getGoods();
        default:
          return next.handle(request);
      }
    }
  }
}