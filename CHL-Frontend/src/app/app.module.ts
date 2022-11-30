import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './common/input/input.component';
import { ButtonComponent } from './common/button/button.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { PersonalDetailsComponent } from './components/patient/personal-details/personal-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PastRecordsComponent } from './components/past-records/past-records.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HttpInterceptorAuthService } from './service/http/http-interceptor-auth.service';
import { MedicalDataComponent } from './components/patient/medical-data/medical-data.component';
import { MedicationComponent } from './components/patient/medication/medication.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    MedicalDataComponent,
    PersonalDetailsComponent,
    PersonalDetailsComponent,
    ButtonComponent,
    MedicationComponent,
    PastRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
