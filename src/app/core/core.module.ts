import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from '../backend/fake-back-end.interceptor';
import { MainGoodsService } from './main-goods.service';
import { ButtonBlackComponent } from './components/button-black/button-black.component';
import { ButtonWhiteComponent } from './components/button-white/button-white.component';


import { Store } from './store'

@NgModule({
  declarations: [
    ButtonBlackComponent,
    ButtonWhiteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ Store,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    } 
  ]
})
export class CoreModule { }
