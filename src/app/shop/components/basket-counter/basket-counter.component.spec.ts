import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketCounterComponent } from './basket-counter.component';

describe('BaskerCounterComponent', () => {
  let component: BasketCounterComponent;
  let fixture: ComponentFixture<BasketCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
