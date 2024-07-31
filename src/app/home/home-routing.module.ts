import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupParentComponent } from './signup-parent/signup-parent.component';
import { SignupVendorComponent } from './signup-vendor/signup-vendor.component';
import { NewhomeComponent } from './newhome/newhome.component';



const routes: Routes = [

  { path: 'homepage', component: NewhomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupParent', component: SignupParentComponent },
  { path: 'signupVendor', component: SignupVendorComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
