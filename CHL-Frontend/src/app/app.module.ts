import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './common/input/input.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { DocPatientDashboardComponent } from './components/doctor/doc-patient-dashboard/doc-patient-dashboard.component';
import { BmiLineGraphComponent } from './components/graphs/bmi-line-graph/bmi-line-graph.component';
import { PulseLineGraphComponent } from './components/graphs/pulse-line-graph/pulse-line-graph.component';
import { BpBarGraphComponent } from './components/graphs/bp-bar-graph/bp-bar-graph.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { ButtonComponent } from './common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabNavigationComponent } from './common/tab-navigation/tab-navigation.component';
import { LoginComponent } from './components/login-page/login/login.component';

import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { ChartModule,CategoryService,ColumnSeriesService ,LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { PulseLineGraphComponent } from './components/graphs/pulse-line-graph/pulse-line-graph.component';
import { BpBarGraphComponent } from './components/graphs/bp-bar-graph/bp-bar-graph.component';
import { BmiLineGraphComponent } from './components/graphs/bmi-line-graph/bmi-line-graph.component';
import { PastRecordsComponent } from './components/past-records/past-records.component';
import { HttpInterceptorAuthService } from './service/http/http-interceptor-auth.service';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { MedicationsComponent } from './components/patient/medications/medications.component';
import { PatientRegistrationComponent } from './components/patient/patient-registration/patient-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DocPatientMedicationComponent } from './components/doctor/doc-patient-medication/doc-patient-medication.component';
import { DocPatientMedicalDataComponent } from './components/doctor/doc-patient-medical-data/doc-patient-medical-data.component';
import { AddMedicalRecordComponent } from './components/doctor/add-medical-record/add-medical-record.component';
import { DocPatientPastRecordsComponent } from './components/doctor/doc-patient-past-records/doc-patient-past-records.component';
import { DoctorDashboardComponent } from './components/doctor/doctor-dashboard/doctor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    DocPatientDashboardComponent,
    BmiLineGraphComponent,
    PulseLineGraphComponent,
    BpBarGraphComponent,
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
    DocPatientMedicationComponent,
    DocPatientPastRecordsComponent,
    DoctorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [CategoryService,LineSeriesService,ColumnSeriesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
