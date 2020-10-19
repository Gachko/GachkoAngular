import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareBlogComponent } from './care-blog.component';

describe('CareBlogComponent', () => {
  let component: CareBlogComponent;
  let fixture: ComponentFixture<CareBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
