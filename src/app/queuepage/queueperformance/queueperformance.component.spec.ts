import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueperformanceComponent } from './queueperformance.component';

describe('QueueperformanceComponent', () => {
  let component: QueueperformanceComponent;
  let fixture: ComponentFixture<QueueperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
