import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CareModule } from './care/care.module';
import { ContactsModule } from './contacts/contacts.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/component/not-found.component';
import { firebase } from '../environments/firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    CareModule,
    ContactsModule,
    FlashMessagesModule.forRoot() ,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
