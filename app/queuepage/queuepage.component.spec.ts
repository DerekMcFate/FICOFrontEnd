import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuepageComponent } from './queuepage.component';

describe('QueuepageComponent', () => {
  let component: QueuepageComponent;
  let fixture: ComponentFixture<QueuepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
