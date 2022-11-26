
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medical-data',
  templateUrl: './medical-data.component.html',
  styleUrls: ['./medical-data.component.scss']
})
export class MedicalDataComponent implements OnInit {

 
  menus={'1':["Dashboard","/patient-dashboard",0],'2':["Personal Details","/personal-details",0],'3':["Medical Data","/medical-data",0],'4':["Medications","/medications",0],'5':["Past Records","/past-records",0]}
  @Input('btntext') btntext: string = 'Login';
  constructor() {}

  ngOnInit(): void {}
  MedicationComponent = new FormGroup({
    height: new FormControl(''),
    lastName: new FormControl(''),
    bmi: new FormControl(''),
    immunization: new FormControl(''),
    familyMedicalHistory: new FormControl(''),
    weight: new FormControl(''),
    allergies: new FormControl(''),
    bloodGroup: new FormControl(''),
    chronicHealthProblem: new FormControl('')
  });

  heightReceived($event: any) {
    this.MedicationComponent .patchValue({ height: $event });
  }
  bmiReceived($event: any) {
    this.MedicationComponent .patchValue({ bmi: $event });
  }
  immunizationsReceived($event: any) {
    this.MedicationComponent .patchValue({ immunization: $event });
  }
  familymedicalhistoryReceived($event: any) {
    this.MedicationComponent .patchValue({ familyMedicalHistory: $event });
  }
  weightReceived($event: any) {
    this.MedicationComponent.patchValue({ weight: $event });
  }
  allergiesReceived($event: any) {
    this.MedicationComponent.patchValue({ allergies: $event });
  }
  bloodGroupReceived($event: any) {
    this.MedicationComponent.patchValue({ bloodGroup: $event });
  }

  chronichealthproblemReceived($event: any) {
    this.MedicationComponent.patchValue({ chronicHealthProblem: $event });
  }

  ipConfig1 = {
    type: 'text',
    label: 'height',
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
    label: 'weight',
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
    label: 'bmi',
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
    label: 'allergies',
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
  ipConfig5 = {
    type: 'text',
    label: 'immunizations',
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
  ipConfig6 = {
    type: 'text',
    label: 'blood group',
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
    label: 'family medical history',
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
  ipConfig8 = {
    type: 'text',
    label: 'chronic health problem',
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
    console.log(this.MedicationComponent.value);
  }
  sidebartabs={'1':["Dashboard","/patient-dashboard",0],'2':["Personal Details","/personal-details",0],'3':["Medical Data","/medical-data",1],'4':["Medications",'/medications',0],'5':["Past Records","/past-records",0]};
}