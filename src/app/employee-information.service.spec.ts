import { TestBed } from '@angular/core/testing';

import { EmployeeInformationService } from './employee-information.service';

describe('EmployeeInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeInformationService = TestBed.get(EmployeeInformationService);
    expect(service).toBeTruthy();
  });
});
