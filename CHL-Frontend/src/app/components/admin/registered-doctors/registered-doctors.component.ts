import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorDetailsService } from 'src/app/service/doctor/doctor-details.service';

@Component({
  selector: 'app-registered-doctors',
  templateUrl: './registered-doctors.component.html',
  styleUrls: ['./registered-doctors.component.scss']
})
export class RegisteredDoctorsComponent implements OnInit {
  
  textBtnConfig = {
     type: "submit",
     styles: {
       background: '#fff',
       color: '#1CB5BD',
       height: '2em',
       width: '8em',
       fontFamily: 'Montserrat',
       fontStyle: 'normal',
       fontWeight: '500',
       fontSize: '1.25em',
       lineHeight: '1.5em',
       textAlign: 'center',
 
     }
   };
 textBtnConfig2 = {
     type: "submit",
     styles: {
       background: '#1CB5BD',
       color: '#fff',
       height: '2em',
       width: '8em',
       fontFamily: 'Montserrat',
       fontStyle: 'normal',
       fontWeight: '500',
       fontSize: '1.25em',
       lineHeight: '1.5em',
       textAlign: 'center',
 
     }
   };
 idConfig = {
     type: 'number',
     label: 'ID',
     placeholder: '',
     styling: {
       width: '12.5em',
       height: '2.5em'
     },
     validations: {
       required: '',
       minLength: '',
       maxLength: '',
       pattern: ''
     },
     patternErrorMessage: ''
   };
 searchDoctorId = {
     type: 'text',
     label: 'to',
     placeholder: 'doctor id',
     styling: {
     width: '20em',
     height: '2.5em',
     background: '#FFFFFF',
     border: '0.0625em solid #949494',
     borderRadius: '0.25em'
     },
     validations: {
     required: 'false',
     minLength: '',
     maxLength: '',
     pattern: '',
     min: '6',
     max: '10'
     },
     patternErrorMessage: ''
     };
     searchBtnConfig2 = {
     type: "submit",
     styles: {
     color: '#fff',
     height: '3em',
     width: '3em',
     fontFamily: 'Montserrat',
     fontStyle: 'normal',
     fontWeight: '500',
     textAlign: 'center',
     background: '#000',
     borderRadius: '0.25em'
     }
     };
  menus = { '1': ['To Be Registered', '/to-be-registered', 0],'2':['In Progress','/in-progress',0],'3':['Registered Doctors','/registered-doctors',1]}
  adminName!: string;
 
   constructor(public doctorDetailsService : DoctorDetailsService) { }
 
   public doctors !: Doctor[];
   ngOnInit(): void {
    this.adminName=String(sessionStorage.getItem('Admin-name'))
    this.doctorDetailsService.getDoctorByStatusCode("REGISTERED").subscribe(data =>
      this.doctors = data);
 
   }
   onClickEventReceived($event : any, id : any){
    this.doctorDetailsService.deleteDoctorById(id).subscribe(data => {
      console.log("deleted successfully");
      window.location.reload();
    })
   }
  
 
 } 