import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent  {

  @Input() email;
  @Input() password;
  @Output() logIn: EventEmitter<any> =new EventEmitter<any>();

  login(value) {
    this.logIn.emit(value);
  }

}
