/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddRestauService } from './add-restau.service';

describe('Service: AddRestau', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRestauService]
    });
  });

  it('should ...', inject([AddRestauService], (service: AddRestauService) => {
    expect(service).toBeTruthy();
  }));
});
