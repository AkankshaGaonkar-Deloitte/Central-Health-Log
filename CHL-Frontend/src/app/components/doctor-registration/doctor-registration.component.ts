import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent implements OnInit {

  btntext:string = 'Register'

  textBtnConfig = {
    styles: {
      width: '160px',
      height: '45px',
      backgroundColor: '#1CB5BD',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '28px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700'
    }
  };

  textDropConfig = {
    styles : {
      // width: '120px',
      // height: '40px',
      // backgroundColor: '#E9F7F8',
      // color: 'black',
      // cursor: 'pointer',
      // fontSize: '20px',
      paddingTop: '8px',
      paddingBottom: '8px',
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

}
