import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuehighriskComponent } from './queuehighrisk.component';

describe('QueuehighriskComponent', () => {
  let component: QueuehighriskComponent;
  let fixture: ComponentFixture<QueuehighriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuehighriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuehighriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
