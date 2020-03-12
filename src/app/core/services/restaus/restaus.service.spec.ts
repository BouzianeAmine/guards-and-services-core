import { TestBed } from '@angular/core/testing';

import { RestausService } from './restaus.service';

describe('RestausService', () => {
  let service: RestausService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestausService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
