import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ResidentAddressComponent } from './resident-address/resident-address.component';
import { MailingAddressComponent } from './mailing-address/mailing-address.component';
import { EmergencyContactsSetupComponent } from './emergency-contacts-setup/emergency-contacts-setup.component';
import { EmergencyContactsAddComponent } from './emergency-contacts-add/emergency-contacts-add.component';

const routes: Routes = [
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'resident-address', component: ResidentAddressComponent },
  { path: 'mailing-address', component: MailingAddressComponent },
  { path: 'emergency-contacts-setup', component: EmergencyContactsSetupComponent },
  { path: 'emergency-contacts-add', component: EmergencyContactsAddComponent },
  { path: '', redirectTo: '/personal-information', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
