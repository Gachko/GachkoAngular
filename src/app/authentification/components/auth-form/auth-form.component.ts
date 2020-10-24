import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent  {

  @Input() email;
  @Input() password;
  @Output() submit: EventEmitter<any> =new EventEmitter<any>();

  onSubmit(userData) {
    this.submit.emit(userData)
   // this.logIn.emit(value);
  }

}