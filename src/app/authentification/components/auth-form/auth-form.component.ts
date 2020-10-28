import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {

  @ContentChild('title', {static: false}) title: ElementRef;

  @Input() email;
  @Input() password;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  ngAfterContentInit() {
    this.title.nativeElement.style.color = '#5e0c0c'; 
  }

  onSubmit(userData) {
    this.submit.emit(userData)
  }

}