import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentProfileModule } from './parent-profile/parent-profile.module';
import { SharedlayoutComponent } from './layout/sharedlayout/sharedlayout.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { SignupParentComponent } from './home/signup-parent/signup-parent.component';
import { SignupVendorComponent } from './home/signup-vendor/signup-vendor.component';
import { NewhomeComponent } from './home/newhome/newhome.component';

import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ParentUserProfileComponent } from './parent-profile/parent-user-profile/parent-user-profile.component';
import { InplaceModule } from 'primeng/inplace';
import { SidebarModule } from 'primeng/sidebar';
import { Tooltip, TooltipModule } from 'primeng/tooltip';
import { Chip, ChipModule } from 'primeng/chip';
import { provideHttpClient } from '@angular/common/http';









@NgModule({
  declarations: [
    AppComponent,
    SharedlayoutComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    MultiSelectModule,
    InplaceModule,
SidebarModule,
BrowserAnimationsModule,
TooltipModule,
ChipModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
