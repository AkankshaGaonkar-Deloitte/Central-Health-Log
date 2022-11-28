import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './common/input/input.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { ButtonComponent } from './common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { ChartModule,CategoryService,ColumnSeriesService ,LineSeriesService} from '@syncfusion/ej2-angular-charts';
// import { Label } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    PersonalDetailsComponent,
    PatientDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [CategoryService,LineSeriesService,ColumnSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
