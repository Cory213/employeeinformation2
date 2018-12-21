import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeInformationService } from '../employee-information.service';
import { Employee } from '../employee';
import { emergencyContact } from '../emergencyContact';

@Component({
  selector: 'app-emergency-contacts-add',
  templateUrl: './emergency-contacts-add.component.html',
  styleUrls: ['./emergency-contacts-add.component.css']
})
export class EmergencyContactsAddComponent implements OnInit {

  employee = new Employee;
  emergencyContact = new emergencyContact;

  constructor(private router: Router, private employeeInformationService: EmployeeInformationService) { }

  ngOnInit() {
    this.employee = this.employeeInformationService.getEmployee();
    this.emergencyContact = {name: '', type: '', contactInfo: '', relationship: ''}
  }

  done () {
    this.addContact();
    this.employeeInformationService.saveSessionStorage(this.employee).subscribe(()=>{
      this.router.navigate(['/emergency-contacts-setup']);
    });
  }

  cancel () {
    this.router.navigate(['/emergency-contacts-setup']);
  }

  addContact () {
    this.employee.emergencyContactsList.push(this.emergencyContact);
  }

}
