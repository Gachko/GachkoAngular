import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CareModule } from './care/care.module';
import { ContactsModule } from './contacts/contacts.module';


import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';



import {PreloaderComponent } from './preloader/preloader.component';
import { NotFoundComponent } from './not-found/component/not-found.component';






@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NotFoundComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
   // MainPageModule,
    CareModule,
    ContactsModule,
    //ShopModule,
    CoreModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
