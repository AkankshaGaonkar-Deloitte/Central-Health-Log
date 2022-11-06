import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/Doctor';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {

  btntext: string = 'Register'
  doctor: Doctor = new Doctor(-1, '', -1, -1, -1, '', '', '', -1, '', '')

  state: string = ''

  saveState($event: string) {
    console.log(`At parent, selected state from child: ${$event}`)
    this.doctor.state = $event
  }

  textBtnConfig = {
    styles: {
      width: '6em',
      height: '1.5em',
      backgroundColor: '#1CB5BD',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '24px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700',
      paddingLeft: '1.2em',
      display: 'inline-flex',
      alignItems: 'center'
    }
  };

  textDropConfig = {
    styles: {
      width: '100%',
      paddingTop: '0.5em',
      paddingBottom: '0.5em',
      textAlign: 'center',
      background: '#e9f7f8',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px'
    }
  }

  stateList = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.doctor)
  }

}
