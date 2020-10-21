import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../core/service/auth-service/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  email = "";
  password="";
  message = ""

  errorMessage = ''; 
  error: { name: string, message: string} = {
    name: "",
    message:""
  }; 

  constructor(private authservice: AuthService, private router: Router, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name:'', message: ''}
  }

  login(user) {

    this.clearErrorMessage()
    if(this.validateForm(user.email, user.password))
    {
      this.authservice.loginWithEmail(user.email, user.password)
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
      this.errorMessage = 'please enter id';
      return false;
    }

    if(password.length === 0) 
    {
      this.errorMessage = 'please enter password';
      return false;
    }

    if(password.length < 6 ) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true
  }
}
