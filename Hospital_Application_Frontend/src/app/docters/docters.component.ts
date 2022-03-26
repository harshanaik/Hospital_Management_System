import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-docters',
  templateUrl: './docters.component.html',
  styleUrls: ['./docters.component.css']
})
export class DoctersComponent implements OnInit {
 allDoctors: any[]=[];
 
 doctor: any;
 selectedDoctor: any;

 form!: FormGroup;

  constructor(private doctorService : DoctorService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      doctor: ["", Validators.required],
    });


    this.doctorService.getdoctors().subscribe((data) => {
      this.allDoctors = data;
    });
  }
  
  public submit() {
   this.doctor = this.selectedDoctor;
  }

}
