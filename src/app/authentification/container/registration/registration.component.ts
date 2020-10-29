import { Component } from '@angular/core';
import { AuthService} from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  email = "";
  password="";
  message = '';
  errorMessage = ''; 
  error: { name: string, message: string} = {
    name: "",
    message:""
  }; 


  constructor(
    private afs: AngularFirestore,
    private authservice: AuthService, 
    private router: Router, 
    private flashMessages: FlashMessagesService
) {}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name:'', message: ''}
  }


  submit(user): void {
    this.clearErrorMessage()
    if(this.validateForm(user.email, user.password))
    {
      this.authservice.registerWithEmail(user.email,user.password)
      .then((res) => {
       return this.afs.collection('carts').doc(res['user'].uid).set({
         email: user.email
       })
      })
      .then(() => {
        this.flashMessages.show('Вы успешно зарегестрированы и вошли в систему.Приятных покупок!', {
          cssClass: 'alert-success',
          timeout: 1700
        });
        this.message = "you are register";
       this.router.navigate(['shop'])
      }).catch(_error => {
        this.error = _error
        this.router.navigate(['/register'])
      })
    }
  }

  validateForm(email, password) {
    if(email.length === 0) 
    {
      this.errorMessage = 'Введите логин';
      return false;
    }

    if(password.length === 0) 
    {
      this.errorMessage = 'Введите пароль';
      return false;
    }

    if(password.length < 6 ) {
      this.errorMessage = 'Пароль содержит мимимум 6 символов';
      return false;
    }

    this.errorMessage = '';
    return true
  }

}