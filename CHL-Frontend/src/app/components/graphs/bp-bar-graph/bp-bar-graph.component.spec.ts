import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpBarGraphComponent } from './bp-bar-graph.component';

describe('BpBarGraphComponent', () => {
  let component: BpBarGraphComponent;
  let fixture: ComponentFixture<BpBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpBarGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
