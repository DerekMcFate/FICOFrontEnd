import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuequalitycontrolComponent } from './queuequalitycontrol.component';

describe('QueuequalitycontrolComponent', () => {
  let component: QueuequalitycontrolComponent;
  let fixture: ComponentFixture<QueuequalitycontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuequalitycontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuequalitycontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
