import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctersComponent } from './docters/docters.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctersComponent,
    PatientsComponent,
    PatientSignupComponent,
    DoctorSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
