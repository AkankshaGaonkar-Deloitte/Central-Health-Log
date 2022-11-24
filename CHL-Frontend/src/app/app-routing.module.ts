import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredDoctorsComponent } from './components/admin/registered-doctors/registered-doctors.component';

const routes: Routes = [
  {path:'',component:RegisteredDoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
