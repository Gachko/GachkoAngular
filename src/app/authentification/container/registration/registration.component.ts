import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../core/service/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = "";
  password="";
  message = '';

  errorMessage = ''; //validation error handle
  error: { name: string, message: string} = {
    name: "",
    message:""
  }; //for firebase error handle


  constructor(private authservice: AuthService, private router: Router, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name:'', message: ''}
  }


  register(user) 
  {
    this.clearErrorMessage()
    if(this.validateForm(user.email, user.password))
    {
      this.authservice.registerWithEmail(user.email,user.password)
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
