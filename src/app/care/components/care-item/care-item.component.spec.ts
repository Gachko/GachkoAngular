import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareItemComponent } from './care-item.component';

describe('CareItemComponent', () => {
  let component: CareItemComponent;
  let fixture: ComponentFixture<CareItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
