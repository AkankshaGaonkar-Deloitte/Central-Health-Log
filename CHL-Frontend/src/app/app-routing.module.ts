import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationComponent } from './components/patient/medication/medication.component';

const routes: Routes = [
  {
    path : '',
    component : MedicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
