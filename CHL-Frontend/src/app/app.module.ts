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
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { ButtonComponent } from './common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorProfileComponent } from './components/doctor/doctor-profile/doctor-profile.component';

import { TabNavigationComponent } from './common/tab-navigation/tab-navigation.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { registerLicense } from '@syncfusion/ej2-base';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { ChartModule,CategoryService,ColumnSeriesService ,LineSeriesService,SplineAreaSeries, SplineRangeAreaSeriesService, SplineAreaSeriesService, AreaSeriesService, MultiColoredAreaSeriesService} from '@syncfusion/ej2-angular-charts';
import { PulseLineGraphComponent } from './components/graphs/pulse-line-graph/pulse-line-graph.component';
import { BpBarGraphComponent } from './components/graphs/bp-bar-graph/bp-bar-graph.component';
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
import { AreaGraphComponent } from './components/graphs/area-graph/area-graph.component';
import { ToBeRegisteredComponent } from './components/admin/to-be-registered/to-be-registered.component';
import { RegisteredDoctorsComponent } from './components/admin/registered-doctors/registered-doctors.component';
import { AdminInProgressComponent } from './components/admin/admin-in-progress/admin-in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    ButtonComponent,
    DocPatientDashboardComponent,
    PulseLineGraphComponent,
    BpBarGraphComponent,
    DoctorProfileComponent,
    TabNavigationComponent,
    AdminInProgressComponent,
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
    AddMedicalRecordComponent,
    DocPatientMedicationComponent,
    DocPatientPastRecordsComponent,
    DoctorDashboardComponent,
    AreaGraphComponent,
    ToBeRegisteredComponent,
    RegisteredDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [CategoryService,LineSeriesService,ColumnSeriesService, MultiColoredAreaSeriesService,SplineAreaSeriesService,AreaSeriesService,DatePipe],
  bootstrap: [AppComponent]
}
)

export class AppModule { }
