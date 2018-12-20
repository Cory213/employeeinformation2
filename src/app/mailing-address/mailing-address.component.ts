import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInformationService } from '../employee-information.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.component.html',
  styleUrls: [
    './mailing-address.component.css'
  ]
})
export class MailingAddressComponent implements OnInit {

  employee = new Employee;

  constructor(private router: Router, private employeeInformationService: EmployeeInformationService) { }

  ngOnInit() {
    this.employee = this.employeeInformationService.getEmployee();
  }

  next () {
    this.checkIfSame();
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/emergency-contacts-setup']);
    })
  }

  back () {
    this.checkIfSame();
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/resident-address']);
    })
  }

  checkIfSame () {
    if(this.employee.mailingAddress.sameAsResident) {
      Object.keys(this.employee.residentAddress).forEach(key=>this.employee.mailingAddress[key]=this.employee.residentAddress[key]);
    }
  }

}
