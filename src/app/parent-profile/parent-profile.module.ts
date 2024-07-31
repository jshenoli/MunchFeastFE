import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentUserProfileComponent } from './parent-user-profile/parent-user-profile.component';
import { RouterModule } from '@angular/router';
import { ParentProfileRouteModule } from './parent-profile-routing.module';
import { BabyProfileComponent } from './babydetails/babydetails.component';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InplaceModule } from 'primeng/inplace';
import { ChipModule } from 'primeng/chip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { BabycardComponent } from './babycard/babycard.component';
import { RippleModule } from 'primeng/ripple';









@NgModule({
  declarations: [
    ParentUserProfileComponent,
    BabyProfileComponent,
    BabycardComponent,
    
    
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ParentProfileRouteModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    MultiSelectModule,
    InplaceModule,
    ChipModule,
    BrowserAnimationsModule,
    FieldsetModule,
    DropdownModule,
    RippleModule
    
    
  ],

  exports: [
    BabycardComponent
  ],
  providers: [DialogService]

})
export class ParentProfileModule { }
