import { TestBed } from '@angular/core/testing';

import { ViewNextService } from './view-next.service';

describe('ViewNextService', () => {
  let service: ViewNextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewNextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
