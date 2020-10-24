import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AuthentificationComponent } from './container/authentification/authentification.component';
import { RegistrationComponent } from './container/registration/registration.component';
import { Routes,RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginGuard} from './guards/login.guard'



const routes: Routes = [
  { path: 'login', component: AuthentificationComponent, canActivate: [ LoginGuard ]},
  { path: 'register', component: RegistrationComponent, canActivate: [ LoginGuard ]}
]


@NgModule({
  declarations: [ 
    AuthentificationComponent, 
    AuthFormComponent, 
    RegistrationComponent
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ LoginGuard ]
})
export class AuthentificationModule { }
