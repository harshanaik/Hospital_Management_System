import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctersComponent } from './docters/docters.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { HomeComponent } from './home/home.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'docters', component: DoctersComponent },
  { path: 'patient-signup', component: PatientSignupComponent },
  { path: 'doctor-signup', component: DoctorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
