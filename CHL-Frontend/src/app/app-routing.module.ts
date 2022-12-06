import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPatientMedicationComponent } from './components/doctor/doc-patient-medication/doc-patient-medication.component';

const routes: Routes = [
  {
    path : 'doc-patient-medication',
    component : DocPatientMedicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
