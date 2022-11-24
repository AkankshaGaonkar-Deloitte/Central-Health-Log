import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToBeRegisteredComponent } from './admin-to-be-registered.component';

describe('AdminToBeRegisteredComponent', () => {
  let component: AdminToBeRegisteredComponent;
  let fixture: ComponentFixture<AdminToBeRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminToBeRegisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminToBeRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
