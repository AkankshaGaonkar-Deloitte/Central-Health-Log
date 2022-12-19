import { TestBed } from '@angular/core/testing';

import { VerifyPrescriptionService } from './verify-prescription.service';

describe('VerifyPrescriptionService', () => {
  let service: VerifyPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
