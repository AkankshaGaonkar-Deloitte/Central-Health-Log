import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInProgressComponent } from './admin-in-progress.component';

describe('AdminInProgressComponent', () => {
  let component: AdminInProgressComponent;
  let fixture: ComponentFixture<AdminInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
