import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { SignupParentComponent } from './signup-parent/signup-parent.component';
import { SignupVendorComponent } from './signup-vendor/signup-vendor.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';  
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { NewhomeComponent } from './newhome/newhome.component';


import { StepperModule } from 'primeng/stepper';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NewhomeComponent,
  
  ],
  imports: [
    CommonModule,
   HomeRoutingModule,
   RouterModule,
   FormsModule,
   ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TabViewModule,
    CheckboxModule,
    FileUploadModule,
    StepperModule
   
  ]
})
export class HomeModule { }
