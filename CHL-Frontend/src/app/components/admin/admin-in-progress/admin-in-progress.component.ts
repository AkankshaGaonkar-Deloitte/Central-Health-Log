import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorDetailsService } from 'src/app/service/doctor/doctor-details.service';

@Component({
  selector: 'app-admin-in-progress',
  templateUrl: './admin-in-progress.component.html',
  styleUrls: ['./admin-in-progress.component.scss']
})
export class AdminInProgressComponent implements OnInit {
  searchBtnConfig = {
    type: "submit",
    styles: {
      color: '#fff',
      height: '2em',
      width: '5em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',
      background: '#000000',
      borderRadius: '0.375em'

    }
  };
textBtnConfig = {
    type: "submit",
    styles: {
      background: '#fff',
      color: '#52C41A',
      height: '2em',
      width: '5em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',
      margin: '0.15em',
      border: '2px solid #52C41A',

    }
  };
  textBtnConfig3 = {
    type: "submit",
    styles: {
      background: '#fff',
      color: 'red',
      height: '2em',
      width: '5em',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '1.25em',
      lineHeight: '1.5em',
      textAlign: 'center',
      margin: '0.15em',
      border: '2px solid red',
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
 menus = { '1': ['To Be Regsitered', '/to-be-registered', 0],'2':['In Progress','/in-progress',1],'3':['Registered Doctors','/registered-doctors']}

  constructor(public doctorDetailsService : DoctorDetailsService) { }
  public doctors !: Doctor[];

  ngOnInit(): void {
    this.doctorDetailsService.getDoctorByStatusCode("IN_PROGRESS").subscribe(data =>
      this.doctors = data);
   
  }
onClickEventReceived($event: any, id : any, statusCode : string){
    this.doctorDetailsService.updateDoorStatusCode(id, statusCode).subscribe(data => {
      console.log("doctor status updated succesfully")
      window.location.reload()
    });
  }

}