import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsslowestComponent } from './analystsslowest.component';

describe('AnalystsslowestComponent', () => {
  let component: AnalystsslowestComponent;
  let fixture: ComponentFixture<AnalystsslowestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsslowestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsslowestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
