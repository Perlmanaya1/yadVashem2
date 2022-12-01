import { TestBed } from '@angular/core/testing';

import { LeftSideService } from './left-side.service';

describe('LeftSideService', () => {
  let service: LeftSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
