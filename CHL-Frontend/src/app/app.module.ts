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
import { LoginComponent } from './components/login-page/login/login.component';
import { NgChartsModule } from 'ng2-charts';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { ChartModule,CategoryService,ColumnSeriesService ,LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { PulseLineGraphComponent } from './components/graphs/pulse-line-graph/pulse-line-graph.component';
import { BpBarGraphComponent } from './components/graphs/bp-bar-graph/bp-bar-graph.component';
import { BmiLineGraphComponent } from './components/graphs/bmi-line-graph/bmi-line-graph.component';
// import { Label } from 'ng2-charts';
import { PastRecordsComponent } from './components/past-records/past-records.component';

import { HttpInterceptorAuthService } from './service/http/http-interceptor-auth.service';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { MedicationsComponent } from './components/patient/medications/medications.component';
import { PatientRegistrationComponent } from './components/patient/patient-registration/patient-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TabNavigationComponent } from './common/tab-navigation/tab-navigation.component';
import { DocPatientMedicalDataComponent } from './components/doctor/doc-patient-medical-data/doc-patient-medical-data.component';
import { AddMedicalRecordComponent } from './components/doctor/doc-add-medical-record/add-medical-record/add-medical-record.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    ButtonComponent,
    TabNavigationComponent,
    DocPatientMedicalDataComponent,
    PatientRegistrationComponent,
    LoginComponent,
    MedicalDataComponent,
    PersonalDetailsComponent,
    PastRecordsComponent,
    MedicationsComponent,
    PatientDashboardComponent,
    PulseLineGraphComponent,
    BpBarGraphComponent,
    BmiLineGraphComponent,
    AddMedicalRecordComponent,
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
  providers: [CategoryService,LineSeriesService,ColumnSeriesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
