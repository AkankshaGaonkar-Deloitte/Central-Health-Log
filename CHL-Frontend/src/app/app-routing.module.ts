import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPatientPastRecordsComponent } from './components/doctor/doc-patient-past-records/doc-patient-past-records.component';

const routes: Routes = [{path:'doc-patient-pastrecords',component:DocPatientPastRecordsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
