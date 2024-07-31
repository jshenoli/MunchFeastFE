import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MunchboardRoutingModule} from './munchboard-routing.module'

import { ParentProfileModule } from '../parent-profile/parent-profile.module';
import { ParentUserProfileComponent } from '../parent-profile/parent-user-profile/parent-user-profile.component';
import { ParentboardComponent } from './parentboard/parentboard.component';
import { TipsComponent } from './tips/tips.component';
import { RouterModule, Routes } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';





@NgModule({
  declarations: [
    ParentboardComponent,
    TipsComponent
    
    
  ],
  imports: [
    CommonModule,
    ParentProfileModule,
    RouterModule,
    FieldsetModule
  ]
})
export class MunchboardModule { }
