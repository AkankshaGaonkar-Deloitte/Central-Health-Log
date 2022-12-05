import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPatientMedicalDataComponent } from './components/doctor/doc-patient-medical-data/doc-patient-medical-data.component';

const routes: Routes = [
  {path:'doc-patient-medical-data',component:DocPatientMedicalDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
