import { TestBed } from '@angular/core/testing';

import { PastRecordService } from './past-record.service';

describe('PastRecordService', () => {
  let service: PastRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
