import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  menus={'1':["Dashboard","/patient-dashboard",0],'2':["Personal Details","/personal-details",1],'3':["Medical Data","/medical-data",0],'4':["Medications",'/medications',0],'5':["Past Records","/past-records",0]};


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
  emailReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  genderReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  lastNameReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  contactNoReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  ageReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  addressReceived($event:any){​​​​​​ this.PersonalDetails.patchValue({​​​​​​'lastName':$event}​​​​​​) }
  
  ipConfig1 = {
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
      label: 'email',
      placeholder:'',
      styling: {
      width: '300px',
      height: '40px'
      },
      validations : {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
      },
      patternErrorMessage: ''
      };​​​​​​
      ipConfig3 = {
        type: 'text',
        label: 'gender',
        placeholder:'',
        styling: {
        width: '300px',
        height: '40px'
        },
        validations : {
        required: '',
        minLength: '',
        maxLength: '',
        pattern: ''
        },
        patternErrorMessage: ''
        };​​​​​​
        ipConfig4 = {
          type: 'text',
          label: 'lastname',
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
          ipConfig5 = {
            type: 'text',
            label: 'contactno',
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
            ipConfig6 = {
              type: 'text',
              label: 'lastname',
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
              ipConfig7 = {
                type: 'text',
                label: 'lastname',
                placeholder:'',
                styling: {
                width: '900px',
                height: '100px'
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
