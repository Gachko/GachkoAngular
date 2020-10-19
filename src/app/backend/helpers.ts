import { HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export function error(errors: any) {
    return of(
      new HttpResponse({
        status: 200,
        body: {
          state: 'error',
          errors
        }
      })
    );
  }
  
  export function ok<T>(data?: T) {
    return of(
      new HttpResponse({
        status: 200,
        body: data
      })
    );
  }
  
  export function sendJSON(data: any) {
    return of(
      new HttpResponse({
        status: 200,
        body: JSON.stringify(data)
      })
    );
  }
  
  export function checkUrl(request: HttpRequest<any>, path: string) {
    return request.url.endsWith(path);
  }