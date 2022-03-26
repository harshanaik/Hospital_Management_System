import { Doctor } from "./Doctor";

export class Patient { 
   
    patientName !: string;
    age !:number;
    gender !:String
    visitedDoctor !:Doctor;
    dateOfVisit !:String;
    prescription !:String;



    constructor() {
    }
}