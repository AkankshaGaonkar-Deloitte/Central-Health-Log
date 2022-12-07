import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatientDashboardComponent } from './doc-patient-dashboard.component';

describe('DocPatientDashboardComponent', () => {
  let component: DocPatientDashboardComponent;
  let fixture: ComponentFixture<DocPatientDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatientDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatientDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
