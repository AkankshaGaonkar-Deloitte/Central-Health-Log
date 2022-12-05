import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatientMedicalDataComponent } from './doc-patient-medical-data.component';

describe('DocPatientMedicalDataComponent', () => {
  let component: DocPatientMedicalDataComponent;
  let fixture: ComponentFixture<DocPatientMedicalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatientMedicalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatientMedicalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
