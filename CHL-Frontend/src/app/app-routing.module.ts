import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInProgressComponent } from './components/admin/admin-in-progress/admin-in-progress.component';



const routes: Routes = [
  {
    path : 'in-progress',
    component : AdminInProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
