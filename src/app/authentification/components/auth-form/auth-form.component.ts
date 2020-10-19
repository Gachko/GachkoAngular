import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() email;

  @Input() password;

  @Output() logIn: EventEmitter<any> =new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  login(value) {
    this.logIn.emit(value);
  }

}
