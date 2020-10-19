import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWhiteComponent } from './button-white.component';

describe('ButtonWhiteComponent', () => {
  let component: ButtonWhiteComponent;
  let fixture: ComponentFixture<ButtonWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
