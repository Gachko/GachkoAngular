import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBlackComponent } from './button-black.component';

describe('ButtonBlackComponent', () => {
  let component: ButtonBlackComponent;
  let fixture: ComponentFixture<ButtonBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
