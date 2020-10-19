import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForewordCareComponent } from './foreword-care.component';

describe('ForewordCareComponent', () => {
  let component: ForewordCareComponent;
  let fixture: ComponentFixture<ForewordCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForewordCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForewordCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
