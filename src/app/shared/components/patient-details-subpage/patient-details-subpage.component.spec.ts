import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsSubpageComponent } from './patient-details-subpage.component';

describe('PatientDetailsSubpageComponent', () => {
  let component: PatientDetailsSubpageComponent;
  let fixture: ComponentFixture<PatientDetailsSubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailsSubpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
