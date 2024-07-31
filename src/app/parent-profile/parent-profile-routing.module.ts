import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentUserProfileComponent } from './parent-user-profile/parent-user-profile.component';
import { BabyProfileComponent } from './babydetails/babydetails.component';





const routes: Routes = [
  { path: 'parentprofile', component: ParentUserProfileComponent },
  { path: 'babyprofile', component: BabyProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentProfileRouteModule { }
