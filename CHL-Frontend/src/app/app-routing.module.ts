
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './components/doctor/doctor-profile/doctor-profile.component';


const routes: Routes = [
  {
    path : '',
    component : DoctorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

