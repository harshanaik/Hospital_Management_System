import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

 

 /* doctorArr  :Doctor[]=[{
    name :"mike",
    age :45,
    gender:"male",
    specialistField:"Nephrologists",
    numberOfPatientAttended:10},
    { name :"david",
  age :45,
  gender:"male",
  specialistField:"ortho",
  numberOfPatientAttended:10},
{ name :"smith",
age :35,
gender:"male",
specialistField:"Nephrologists",
numberOfPatientAttended:10}] */

  constructor(private httpClient: HttpClient) { }

  public saveDoctor(doctor:Doctor){
    return this.httpClient.post("http://localhost:8082/doctor",doctor, {responseType : "text" as "json"});
  }
  
  public getdoctors(){
    return this.httpClient.get<any[]>("http://localhost:8082/doctor/get-all");

  }

    
  }
