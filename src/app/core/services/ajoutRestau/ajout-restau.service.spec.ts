import { TestBed } from '@angular/core/testing';

import { AjoutRestauService } from './ajout-restau.service';

describe('AjoutRestauService', () => {
  let service: AjoutRestauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutRestauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
