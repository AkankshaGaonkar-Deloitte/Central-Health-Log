import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './common/input/input.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { ButtonComponent } from './common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredDoctorsComponent } from './components/admin/registered-doctors/registered-doctors.component';
import { TabNavigationComponent } from './common/tab-navigation/tab-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    CheckboxComponent,
    ButtonComponent,
    RegisteredDoctorsComponent,
    ButtonComponent,
    TabNavigationComponent,
    RegisteredDoctorsComponent
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
