import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../Patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  allDoctors: any[]=[];

  patient !:Patient;


  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private doctorService :DoctorService, private patientService : PatientServiceService) { }

  ngOnInit(): void {
    
    this.signupForm = this.formBuilder.group({
      patientName: [''],
      age: [''],
      gender:[''],
      visitedDoctor:[{}],
      dateOfVisit: [''], 
      prescription: ['']
    })
    this.doctorService.getdoctors().subscribe((data) => {
      this.allDoctors = data;
    });
  }
  signUp() {
    this.patient=this.signupForm.value;
   

    let response= this.patientService.savePatient(this.patient)
     
        .subscribe(res => {
          alert("Apointment booked");},err => console.log(err));
 
          console.log(this.patient);
          this.signupForm.reset();
  }

}
