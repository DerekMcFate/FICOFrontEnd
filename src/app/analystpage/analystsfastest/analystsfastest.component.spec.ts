import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsfastestComponent } from './analystsfastest.component';

describe('AnalystsfastestComponent', () => {
  let component: AnalystsfastestComponent;
  let fixture: ComponentFixture<AnalystsfastestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsfastestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsfastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
