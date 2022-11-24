import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {

  menus = {
    '1': ['Dashboard', '/doctor-dashboard', 0],
    '2': ['Doctor Profile', '/doctor-profile', 1]
  };

  @Input('btntext') btntext: string = 'Login';
  constructor() {}

  ngOnInit(): void {}
  DoctorProfile = new FormGroup({
    speciality: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    consultationFee: new FormControl(''),
    contactNo: new FormControl(''),
    age: new FormControl(''),
  });

  specialityReceived($event: any) {
    this.DoctorProfile.patchValue({ speciality: $event });
  }
  emailReceived($event: any) {
    this.DoctorProfile.patchValue({ email: $event });
  }
  genderReceived($event: any) {
    this.DoctorProfile.patchValue({ gender: $event });
  }
  consultationFeeReceived($event: any) {
    this.DoctorProfile.patchValue({ consultationFee: $event });
  }
  contactNoReceived($event: any) {
    this.DoctorProfile.patchValue({ contactNo: $event });
  }
  ageReceived($event: any) {
    this.DoctorProfile.patchValue({ age: $event });
  }
  addressReceived($event: any) {
    this.DoctorProfile.patchValue({ address: $event });
  }

  ipConfig1 = {
    type: 'text',
    label: 'speciality',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig2 = {
    type: 'text',
    label: 'email',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig3 = {
    type: 'text',
    label: 'gender',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig4 = {
    type: 'text',
    label: 'consultationFee',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig5 = {
    type: 'text',
    label: 'contactNo',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '10',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig6 = {
    type: 'text',
    label: 'age',
    placeholder: '',
    styling: {
      width: '300px',
      height: '40px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
  ipConfig7 = {
    type: 'text',
    label: 'address',
    placeholder: '',
    styling: {
      width: '900px',
      height: '100px',
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: '',
    },
    patternErrorMessage: '',
  };
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
    },
    type: 'submit',
  };
  onupdate() {
    console.log(this.DoctorProfile.value);
  }
}


