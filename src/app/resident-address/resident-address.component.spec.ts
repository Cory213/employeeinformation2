import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentAddressComponent } from './resident-address.component';

describe('ResidentAddressComponent', () => {
  let component: ResidentAddressComponent;
  let fixture: ComponentFixture<ResidentAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
