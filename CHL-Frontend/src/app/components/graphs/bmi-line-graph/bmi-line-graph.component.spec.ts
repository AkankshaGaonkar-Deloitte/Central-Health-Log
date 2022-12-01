import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiLineGraphComponent } from './bmi-line-graph.component';

describe('BmiLineGraphComponent', () => {
  let component: BmiLineGraphComponent;
  let fixture: ComponentFixture<BmiLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiLineGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
