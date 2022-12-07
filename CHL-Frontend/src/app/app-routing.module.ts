import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastRecordsComponent } from './components/past-records/past-records.component';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { MedicationsComponent } from './components/patient/medications/medications.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { PatientRegistrationComponent } from './components/patient/patient-registration/patient-registration.component';
import { DocPatientMedicalDataComponent } from './components/doctor/doc-patient-medical-data/doc-patient-medical-data.component';
import { AddMedicalRecordComponent } from './components/doctor/add-medical-record/add-medical-record.component';
import { DocPatientMedicationComponent } from './components/doctor/doc-patient-medication/doc-patient-medication.component';
import { DocPatientPastRecordsComponent } from './components/doctor/doc-patient-past-records/doc-patient-past-records.component';
import { DoctorDashboardComponent } from './components/doctor/doctor-dashboard/doctor-dashboard.component';
import { DocPatientDashboardComponent } from './components/doctor/doc-patient-dashboard/doc-patient-dashboard.component';

const routes: Routes = [
  {
    path:'doctor-dashboard',
    component:DoctorDashboardComponent
  },
  {
    path : 'doctor/patient/past-records',
    component : DocPatientPastRecordsComponent
  },
  {
    path : 'doctor/patient/medication',
    component : DocPatientMedicationComponent
  },
  {
    path:'registration',
    component:PatientRegistrationComponent
  },
  {
    path : 'patient-dashboard',
    component : PatientDashboardComponent
  },
  {
    path:'doctor/patient/medical-data',
    component : DocPatientMedicalDataComponent
  },
  {
    path: 'doctor/patient/add-medical-data',
    component : AddMedicalRecordComponent
  },
  {
    path : 'medical-data',
    component : MedicalDataComponent
  },
  {
    path : 'medications',
    component : MedicationsComponent
  },
  {
    path : 'personal-details',
    component : PersonalDetailsComponent
  },
  {
    path : 'past-records',
    component : PastRecordsComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'doc-patient-dashboard',
    component : DocPatientDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
