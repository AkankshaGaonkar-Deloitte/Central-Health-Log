import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Medication } from 'src/app/model/patient/medication';
import { MedicationService } from 'src/app/service/medication/medication.service';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

import domtoimage from 'dom-to-image';
import { MedicalData } from 'src/app/model/medical-data';
import { Patient } from 'src/app/model/patient';
import { PatientDetailsService } from 'src/app/service/patient-details/patient-details.service';
import { Doctor } from 'src/app/model/doctor';

@Component({
  selector: 'app-add-medical-record',
  templateUrl: './add-medical-record.component.html',
  styleUrls: ['./add-medical-record.component.scss']
})
export class AddMedicalRecordComponent implements OnInit {

  patientId: number = 43190
  patient: Patient = new Patient()
  doctorId: number = 1
  doctor: Doctor = new Doctor()
  allMedicalDataOfAPatient: Medication[] = []
  medicalData: MedicalData = new MedicalData()

  idConfig = {
    type: 'number',
    label: 'ID',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '1',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  nameConfig = {
    type: 'text',
    label: 'Name',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '3',
      maxLength: '16',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  ageConfig = {
    type: 'number',
    label: 'Age',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '1',
      maxLength: '2',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  genderConfig = {
    styles: {
    }
  }

  optionList = [
    "Male",
    "Female",
    "Other"
  ];

  contactConfig = {
    type: 'tel',
    label: 'Phone no',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '10',
      maxLength: '10',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  modeList = [
    "Online",
    "Offline"
  ];

  dateConfig = {
    type: 'date',
    label: 'Date',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  emailConfig = {
    type: 'email',
    label: 'Date',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  facilityConfig = {
    type: 'text',
    label: 'Facility',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '14',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  complaintConfig = {
    type: 'text',
    label: 'Complaint',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '30',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  heightConfig = {
    type: 'number',
    label: 'Height',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  weightConfig = {
    type: 'number',
    label: 'Weight',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '',
      maxLength: '',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  BPConfig = {
    type: 'text',
    label: 'BP',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '5',
      maxLength: '7',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  pulseConfig = {
    type: 'number',
    label: 'Pulse',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '3',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  diagnosisConfig = {
    type: 'text',
    label: 'Diagnosis',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '100',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  labTestConfig = {
    type: 'text',
    label: 'Diagnosis',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '100',
      pattern: ''
    },
    patternErrorMessage: ''
  };

  instructionsConfig = {
    type: 'text',
    label: 'Instructions',
    placeholder: '',
    styling: {
      height: '2.375em',
      width: '100%'
    },
    validations: {
      required: '',
      minLength: '2',
      maxLength: '100',
      pattern: ''
    },
    patternErrorMessage: ''
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

  menus1 = {
    '1': ['Patient Dashboard', '/doc-patient-dashboard', 0], '2': ['Medical Data', '/doctor/patient/medical-data', 0],
    '3': ['Medications', '/doctor/patient/medication', 0], '4': ['Past Records', '/doctor/patient/past-records', 1]
  };

  menus = { '1': ['Dashboard', '/doctor-dashboard', 1], '2': ['Doctor Profile', '/doctor-profile'] }

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

  constructor(
    private medicationService: MedicationService,
    private patientDetailsService: PatientDetailsService,
    
  ) { }

  ngOnInit(): void {
    this.medicationService.getAllPatientRecords(this.patientId)
      .subscribe(response => {
        this.allMedicalDataOfAPatient = response
        console.log(this.allMedicalDataOfAPatient);

      }
    )

    this.patientDetailsService.getPatientByPatientId(this.patientId)
      .subscribe(response => {
        console.log(response);        
        this.patient=response
      })
  }

  removeOrDeleteMedication(id?: number) {
    this.medicationService.removeOrDeleteMedication(id)
      .subscribe(
        response => {
          this.medicationService.getAllPatientRecords(this.patientId)
            .subscribe(data => this.allMedicalDataOfAPatient = data)
        }
      )
  }

  public convertToPDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data as HTMLElement).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }

//   toPdf() {
//     const dashboard = document.getElementById('contentToConvert');

//     const dashboardHeight = (dashboard as HTMLElement).clientHeight;
//     const dashboardWidth = (dashboard as HTMLElement).clientWidth + 40;
//     const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

//     domtoimage.toPng((dashboard as Node), options).then((imgData) => {
//          const doc = new jspdf(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
//          const imgProps = doc.getImageProperties(imgData);
//          const pdfWidth = doc.internal.pageSize.getWidth();
//          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//          doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//          doc.save('Dashboard for hyperpanels.pdf');
//     });
// }



}