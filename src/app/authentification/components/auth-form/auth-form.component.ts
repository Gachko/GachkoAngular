import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {

  ngOnInit(){}
  @Input() email;
  @Input() password;
  @Output() logIn: EventEmitter<any> =new EventEmitter<any>();

  login(value) {
    this.logIn.emit(value);
  }

}
