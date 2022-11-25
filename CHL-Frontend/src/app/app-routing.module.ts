import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';

const routes: Routes = [
  {
    path : '',
    component : PersonalDetailsComponent
  },
  {
    path : 'patient-dashboard',
    component : PatientDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
