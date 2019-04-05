import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsubpagedetailedComponent } from './analystsubpagedetailed.component';

describe('AnalystsubpagedetailedComponent', () => {
  let component: AnalystsubpagedetailedComponent;
  let fixture: ComponentFixture<AnalystsubpagedetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsubpagedetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsubpagedetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
