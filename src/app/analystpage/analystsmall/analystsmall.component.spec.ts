import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsmallComponent } from './analystsmall.component';

describe('AnalystsmallComponent', () => {
  let component: AnalystsmallComponent;
  let fixture: ComponentFixture<AnalystsmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
