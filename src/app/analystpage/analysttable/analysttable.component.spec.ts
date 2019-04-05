import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysttableComponent } from './analysttable.component';

describe('AnalysttableComponent', () => {
  let component: AnalysttableComponent;
  let fixture: ComponentFixture<AnalysttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
