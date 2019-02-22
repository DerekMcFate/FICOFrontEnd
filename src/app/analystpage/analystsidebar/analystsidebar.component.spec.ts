import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsidebarComponent } from './analystsidebar.component';

describe('AnalystsidebarComponent', () => {
  let component: AnalystsidebarComponent;
  let fixture: ComponentFixture<AnalystsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalystsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
