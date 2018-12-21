import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInformationService } from '../employee-information.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emergency-contacts-setup',
  templateUrl: './emergency-contacts-setup.component.html',
  styleUrls: [
    './emergency-contacts-setup.component.css'
  ]
})
export class EmergencyContactsSetupComponent implements OnInit {

  employee = new Employee;
  showEmployee;

  constructor(private router: Router, private employeeInformationService: EmployeeInformationService) { }

  ngOnInit() {
    this.employee = this.employeeInformationService.getEmployee();
    this.showEmployee = false;
  }

  back () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/mailing-address']);
    })
  }

  add () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/emergency-contacts-add']);
    })
  }

  submit () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.showEmployee = true;
    })
  }

}
