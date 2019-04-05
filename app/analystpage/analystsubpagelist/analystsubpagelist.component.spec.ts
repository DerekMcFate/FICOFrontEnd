import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsubpagelistComponent } from './analystsubpagelist.component';

describe('AnalystsubpagelistComponent', () => {
  let component: AnalystsubpagelistComponent;
  let fixture: ComponentFixture<AnalystsubpagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsubpagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsubpagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
