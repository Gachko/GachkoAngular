import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/component/not-found.component';
import { MainPageModule } from './main-page/main-page.module';
import { ShopModule} from './shop/shop.module';
import { AuthentificationModule } from './authentification/authentification.module';

const routes: Routes = [
  
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'care', pathMatch: 'full', loadChildren: './care/care.module#CareModule' },
  { path: 'contacts',pathMatch: 'full',  loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: 'shop', redirectTo: '/shop' },
  { path: 'register', redirectTo: '/register' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    ShopModule , 
    MainPageModule, 
    AuthentificationModule
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { 

  
}
