import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPatientDashboardComponent } from './components/doctor/doc-patient-dashboard/doc-patient-dashboard.component';

const routes: Routes = [
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
