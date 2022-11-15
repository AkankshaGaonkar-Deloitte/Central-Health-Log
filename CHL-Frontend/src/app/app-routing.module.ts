import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';

const routes: Routes = [
  {
    path : '',
    component : MedicalDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
