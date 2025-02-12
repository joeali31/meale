import { TestBed } from '@angular/core/testing';

import { MealesService } from './meales.service';

describe('MealesService', () => {
  let service: MealesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
