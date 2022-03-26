import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {
  doctor !:Doctor;

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private doctorService: DoctorService){ }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      age: [''],
      gender:[''],
      specialistField: [''],
      numberOfPatientAttended: ['']
      
    })

  }

  signUp() {
    this.doctor=this.signupForm.value;
   

   let response= this.doctorService.saveDoctor(this.doctor)
    
       .subscribe(res => {
         alert("Doctor Saved");},err => console.log(err));

         console.log(this.doctor);
         this.signupForm.reset();
   
  }

}
