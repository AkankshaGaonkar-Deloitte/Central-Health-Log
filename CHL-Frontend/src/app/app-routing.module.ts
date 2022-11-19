import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';

const routes: Routes = [ {path:'registration',component:PatientRegistrationComponent},
{path:'addPatient',component:AddPatientComponent},{path:'addDoctor',component:AddDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
