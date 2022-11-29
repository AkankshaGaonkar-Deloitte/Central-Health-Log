import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { PastRecordsComponent } from './components/past-records/past-records.component';
import { MedicationsComponent } from './components/patient/medications/medications.component';

const routes: Routes = [
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
