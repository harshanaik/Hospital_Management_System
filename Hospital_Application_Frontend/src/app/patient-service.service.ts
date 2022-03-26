import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './Doctor';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  

  // private patientArray :Patient[]=[{

  //   patientId :1,
  //   patientName : "Mahesh",
  //   age :18,
  //   gender :"Male",
  //   visitedDoctor :{ name :"smith",
  //   age :35,
  //   gender:"male",
  //   specialistField:"Nephrologists",
  //   numberOfPatientAttended:10},
  //   dateOfVisit :"21/03/2022",
  //   prescription :"fever"

  // },
  // {

  //   patientId :2,
  //   patientName : "kishore",
  //   age :22,
  //   gender :"Male",
  //   visitedDoctor :{ name :"smith",
  //   age :35,
  //   gender:"male",
  //   specialistField:"Nephrologists",
  //   numberOfPatientAttended:10},
  //   dateOfVisit :"21/03/2022",
  //   prescription :"fever"

  // }];

  constructor(private httpClient: HttpClient) { }

 
    public savePatient(patient : Patient){
      return this.httpClient.post("http://localhost:8081/patient",patient, {responseType : "text" as "json"});
    }

    public getById(id: number){
        return this.httpClient.get<any[]>("http://localhost:8081/patient/"+id);
    }

  }

