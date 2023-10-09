import { TestBed } from '@angular/core/testing';

import { LogoutService } from './logout.service';

xdescribe('LogoutService', () => {
  let service: LogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
