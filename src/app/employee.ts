import { residentAddress } from './residentAddress';
import { mailingAddress } from './mailingAddress';

export class Employee {
  firstName: string;
  lastName: string;
  middleName: string;
  nickName: string;
  birthDate: number;
  gender: string;
  maritalStatus: string;
  SSN: number;
  homePhone: number;
  cellPhone: number;
  personalEmail: string;
  residentAddress = new residentAddress;
  mailingAddress = new mailingAddress;
  emergencyContactsList: Array<{name: string, type: string, contactInfo: string, relationship: String}>;
}