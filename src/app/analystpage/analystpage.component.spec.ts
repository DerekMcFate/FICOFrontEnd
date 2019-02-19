import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystpageComponent } from './analystpage.component';

describe('AnalystpageComponent', () => {
  let component: AnalystpageComponent;
  let fixture: ComponentFixture<AnalystpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
