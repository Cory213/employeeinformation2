import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInformationService } from '../employee-information.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: [
    './personal-information.component.css',
  ]
})
export class PersonalInformationComponent implements OnInit {
  
  employee = new Employee;

  constructor(private router: Router, private employeeInformationService: EmployeeInformationService) { }

  ngOnInit() {
    this.employee = this.employeeInformationService.getEmployee();
    this.employee.emergencyContactsList[0] = {name: "hey", type: "hey", contactInfo: "hey", relationship: "hey"};
    console.log(this.employee);
  }

  next () {
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/resident-address']);
    })
  }
}
