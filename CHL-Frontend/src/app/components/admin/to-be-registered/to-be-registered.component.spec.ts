import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeRegisteredComponent } from './to-be-registered.component';

describe('ToBeRegisteredComponent', () => {
  let component: ToBeRegisteredComponent;
  let fixture: ComponentFixture<ToBeRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeRegisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToBeRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
