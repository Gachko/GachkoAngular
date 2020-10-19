import { TestBed } from '@angular/core/testing';

import { MainGoodsService } from './main-goods.service';

describe('MainGoodsService', () => {
  let service: MainGoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainGoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
