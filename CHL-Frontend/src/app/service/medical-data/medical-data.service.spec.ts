import { TestBed } from '@angular/core/testing';

import { MedicalDataService } from './medical-data.service';

describe('MedicalDataService', () => {
  let service: MedicalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
