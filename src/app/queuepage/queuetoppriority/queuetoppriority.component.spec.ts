import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuetoppriorityComponent } from './queuetoppriority.component';

describe('QueuetoppriorityComponent', () => {
  let component: QueuetoppriorityComponent;
  let fixture: ComponentFixture<QueuetoppriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuetoppriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuetoppriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
