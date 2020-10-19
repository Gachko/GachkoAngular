import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBlogComponent } from './photo-blog.component';

describe('PhotoBlogComponent', () => {
  let component: PhotoBlogComponent;
  let fixture: ComponentFixture<PhotoBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
