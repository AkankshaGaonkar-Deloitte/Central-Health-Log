import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDoctorsComponent } from './registered-doctors.component';

describe('RegisteredDoctorsComponent', () => {
  let component: RegisteredDoctorsComponent;
  let fixture: ComponentFixture<RegisteredDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
