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
import { DocPatientDashboardComponent } from './components/doctor/doc-patient-dashboard/doc-patient-dashboard.component';
import { BmiLineGraphComponent } from './components/graphs/bmi-line-graph/bmi-line-graph.component';
import { PulseLineGraphComponent } from './components/graphs/pulse-line-graph/pulse-line-graph.component';
import { BpBarGraphComponent } from './components/graphs/bp-bar-graph/bp-bar-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabNavigationComponent } from './common/tab-navigation/tab-navigation.component';

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
    TabNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
