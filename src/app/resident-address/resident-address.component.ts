import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInformationService } from '../employee-information.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-resident-address',
  templateUrl: './resident-address.component.html',
  styleUrls: [
    './resident-address.component.css'
  ]
})
export class ResidentAddressComponent implements OnInit {

  employee = new Employee;

  constructor(private router: Router, private employeeInformationService: EmployeeInformationService) { }

  ngOnInit() {
    this.employee = this.employeeInformationService.getEmployee();
  }

  next () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/mailing-address']);
    })
  }

  back () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/personal-information']);
    })
  }
}
