import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';

const routes: Routes = [
  {
    path : 'patient-dashboard',
    component : PatientDashboardComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
