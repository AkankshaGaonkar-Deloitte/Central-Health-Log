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
import { AdminInProgressComponent } from './components/admin/admin-in-progress/admin-in-progress.component';
import { ToBeRegisteredComponent } from './components/admin/to-be-registered/to-be-registered.component';
import { RegisteredDoctorsComponent } from './components/admin/registered-doctors/registered-doctors.component';


import { DoctorProfileComponent } from './components/doctor/doctor-profile/doctor-profile.component';
import { RouteGuardService } from './service/route-guard/route-guard.service';


const routes: Routes = [
  {
    path : 'doctor-profile',
    component : DoctorProfileComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'to-be-registered',
    component : ToBeRegisteredComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'registered-doctors',
    component : RegisteredDoctorsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'doctor-dashboard',
    component:DoctorDashboardComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'doctor/patient/past-records',
    component : DocPatientPastRecordsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'doctor/patient/medication',
    component : DocPatientMedicationComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'registration',
    component:PatientRegistrationComponent
  },
  {
    path : 'patient-dashboard',
    component : PatientDashboardComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'doctor/patient/medical-data',
    component : DocPatientMedicalDataComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'doctor/patient/add-medical-data',
    component : AddMedicalRecordComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'medical-data',
    component : MedicalDataComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'medications',
    component : MedicationsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'personal-details',
    component : PersonalDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path : 'past-records',
    component : PastRecordsComponent,
    canActivate: [RouteGuardService]
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
  },
  {
    path : 'in-progress',
    component : AdminInProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
