import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystGraphLevelComponent } from './analyst-graph-level.component';

describe('AnalystGraphLevelComponent', () => {
  let component: AnalystGraphLevelComponent;
  let fixture: ComponentFixture<AnalystGraphLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystGraphLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystGraphLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
