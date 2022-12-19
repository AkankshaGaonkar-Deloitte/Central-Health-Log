import { DoctorDetailsService } from 'src/app/service/doctor/doctor-details.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';

@Component({
  selector: 'app-to-be-registered',
  templateUrl: './to-be-registered.component.html',
  styleUrls: ['./to-be-registered.component.scss']
})
export class ToBeRegisteredComponent implements OnInit {
  displayStyle = "none";
  adminName!: string;


  closePopup() {
    this.displayStyle = "none";
  }

textBtnConfig = {
  type: "submit",
  styles: {
    background: '#fff',
    color: '#1CB5BD',
    height: '2em',
    width: '5em',
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
  searchBtnConfig1 = {
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
menus = { '1': ['To Be Registered', '/to-be-registered', 1],'2':['In Progress','/in-progress',0],'3':['Registered Doctors','/registered-doctors',0]}

constructor(public doctorDetailsService : DoctorDetailsService) { }

public doctors !: Doctor[];

ngOnInit(): void {
  this.adminName=String(sessionStorage.getItem('Admin-name'))
    this.doctorDetailsService.getDoctorByStatusCode("TO_BE_REGISTERED").subscribe(data =>
      this.doctors = data);

}

onClickEventReceived($event: any, id : any, statusCode : string){
  this.doctorDetailsService.updateDoorStatusCode(id, statusCode).subscribe(data => {
    console.log("doctor status updated succesfully")
    this.displayStyle = "block";
    window.location.reload();
  });
}

} 
