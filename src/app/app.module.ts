import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ResidentAddressComponent } from './resident-address/resident-address.component';
import { MailingAddressComponent } from './mailing-address/mailing-address.component';
import { EmergencyContactsSetupComponent } from './emergency-contacts-setup/emergency-contacts-setup.component';
import { EmergencyContactsAddComponent } from './emergency-contacts-add/emergency-contacts-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    ResidentAddressComponent,
    MailingAddressComponent,
    EmergencyContactsSetupComponent,
    EmergencyContactsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
