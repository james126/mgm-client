import { TestBed } from '@angular/core/testing';

import { BodyParserService } from './body-parser.service';

describe('BodyParserService', () => {
  let service: BodyParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
