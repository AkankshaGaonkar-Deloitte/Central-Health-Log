import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseLineGraphComponent } from './pulse-line-graph.component';

describe('PulseLineGraphComponent', () => {
  let component: PulseLineGraphComponent;
  let fixture: ComponentFixture<PulseLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulseLineGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulseLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
