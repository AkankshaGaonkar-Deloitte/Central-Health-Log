import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  menus={'1':["Dashboard","/patient-dashboard"],'2':["Personal Details","/personal-details"],'3':["Medical Data","/medical-data"],'4':["Medications",'/medications'],'5':["Past Records","/past-records"]};


  @Input('btntext') btntext: string='Login';
  constructor() { }

  ngOnInit(): void {
  }
  PersonalDetails = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    });

  firstNameReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'firstName':$event}​​​​​​) }
  lastNameReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  
  ipConfig = {
    type: 'text',
    label: 'firstname',
    placeholder:'',
    styling: {
    width: '300px',
    height: '40px'
    },
    validations : {
    required: '',
    minLength: '3',
    maxLength: '',
    pattern: ''
    },
    patternErrorMessage: ''
    };​​​​​​
    ipConfig2 = {
      type: 'text',
      label: 'lastname',
      placeholder:'',
      styling: {
      width: '200px',
      height: '40px'
      },
      validations : {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: ''
      },
      patternErrorMessage: ''
      };​​​​​​

  textBtnConfig = {
    styles: {
      backgroundColor: '#1CB5BD',
      color: '#ffff',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      width: '150px',
      height: '40px',
      border: '1px solid #1CB5BD',
      borderRadius: '4px',
      

    },type: 'submit'
  }
  onupdate(){
   console.log(this.PersonalDetails.value);
  }
  

}
