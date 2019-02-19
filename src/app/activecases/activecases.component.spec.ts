import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivecasesComponent } from './activecases.component';

describe('ActivecasesComponent', () => {
  let component: ActivecasesComponent;
  let fixture: ComponentFixture<ActivecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
