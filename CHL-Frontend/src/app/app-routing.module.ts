import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { MedicationComponent } from './components/patient/medication/medication.component';

const routes: Routes = [
  {
    path : 'medical-data',
    component : MedicalDataComponent
  },
  {
    path : 'medication',
    component : MedicationComponent
  },
  {
    path : 'personal-details',
    component : PersonalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
