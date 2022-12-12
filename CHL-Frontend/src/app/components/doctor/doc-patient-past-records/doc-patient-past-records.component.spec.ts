import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatientPastRecordsComponent } from './doc-patient-past-records.component';

describe('DocPatientPastRecordsComponent', () => {
  let component: DocPatientPastRecordsComponent;
  let fixture: ComponentFixture<DocPatientPastRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatientPastRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatientPastRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
