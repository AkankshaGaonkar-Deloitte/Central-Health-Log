import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastRecordsComponent } from './components/past-records/past-records.component';

const routes: Routes = [
  {path:'past-records', component: PastRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
