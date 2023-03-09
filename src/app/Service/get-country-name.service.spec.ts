import { TestBed } from '@angular/core/testing';

import { GetCountryNameService } from './get-country-name.service';

describe('GetCountryNameService', () => {
  let service: GetCountryNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountryNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
