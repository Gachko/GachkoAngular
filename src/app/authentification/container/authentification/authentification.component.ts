import { Component } from '@angular/core';
import { AuthService} from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {

  email = "";
  password="";
  message = ""
  errorMessage = ''; 
  error: { name: string, message: string} = {
    name: "",
    message:""
  }; 

  constructor(
    private authservice: AuthService, 
    private router: Router, 
    private flashMessages: FlashMessagesService
) { }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name:'', message: ''}
  }

  submit(event) {

    this.clearErrorMessage()
    if(this.validateForm(event.email, event.password))
    {
      this.authservice.loginWithEmail(event.email, event.password)
      .then(() => {
        this.flashMessages.show('Вы вошли в систему. Приятных покупок!', {
          cssClass: 'alert-success',
          timeout: 1000
        });
       this.router.navigate(['shop'])
      })
      .catch(_error => {
        this.error = _error;
        this.router.navigate(['login'])
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
      this.errorMessage = 'Веедите пароль';
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
