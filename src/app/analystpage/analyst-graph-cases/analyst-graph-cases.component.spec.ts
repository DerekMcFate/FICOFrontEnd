import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystGraphCasesComponent } from './analyst-graph-cases.component';

describe('AnalystGraphCasesComponent', () => {
  let component: AnalystGraphCasesComponent;
  let fixture: ComponentFixture<AnalystGraphCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystGraphCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystGraphCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
