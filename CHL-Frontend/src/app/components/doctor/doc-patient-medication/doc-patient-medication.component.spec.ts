import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatientMedicationComponent } from './doc-patient-medication.component';

describe('DocPatientMedicationComponent', () => {
  let component: DocPatientMedicationComponent;
  let fixture: ComponentFixture<DocPatientMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatientMedicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatientMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
