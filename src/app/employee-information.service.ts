import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInformationService {

  constructor() { }

  getSessionStorage() {
    return new Observable((observer) => { 
      var obj = JSON.parse(sessionStorage.user);
      if(obj === undefined) {
        observer.error("Failed to get employee!");
      } else {
        observer.next(obj);
        observer.complete();
      }
    })
  };

  saveSessionStorage(user) {
    return new Observable((observer) => { 
      sessionStorage.setItem('user', JSON.stringify(user));
      observer.next();
      observer.complete();
    })
  };

  getEmployee () {
    var employee = new Employee;
    this.getSessionStorage().subscribe(obj => Object.keys(obj).forEach(key=>employee[key]=obj[key]));
    return employee;
  }
}
