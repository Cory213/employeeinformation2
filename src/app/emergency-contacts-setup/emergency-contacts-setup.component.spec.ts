import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsSetupComponent } from './emergency-contacts-setup.component';

describe('EmergencyContactsSetupComponent', () => {
  let component: EmergencyContactsSetupComponent;
  let fixture: ComponentFixture<EmergencyContactsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
