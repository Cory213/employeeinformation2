import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsAddComponent } from './emergency-contacts-add.component';

describe('EmergencyContactsAddComponent', () => {
  let component: EmergencyContactsAddComponent;
  let fixture: ComponentFixture<EmergencyContactsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
