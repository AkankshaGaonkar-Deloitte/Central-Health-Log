import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToBeRegisteredComponent } from './components/admin/to-be-registered/to-be-registered.component';


const routes: Routes = [
  {
    path : 'to-be-registered',
    component : ToBeRegisteredComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
