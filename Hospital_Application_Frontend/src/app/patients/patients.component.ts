import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientid !: number;
  
  isNotFound : boolean = false;

  patient !:any;
  constructor(private patientService : PatientServiceService) { }

  ngOnInit(): void {
  }

  findPatientByPatientId(){
    debugger
      this.patientService.getById(this.patientid).subscribe((data)=>{
        this.isNotFound = false
          this.patient = data
      
      },
      (error)=>{
        
          this.isNotFound = true 
      }
      )

  }


}
