import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedlayoutComponent } from './layout/sharedlayout/sharedlayout.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { ParentProfileModule } from './parent-profile/parent-profile.module';
import { ParentUserProfileComponent } from './parent-profile/parent-user-profile/parent-user-profile.component';
import { HomeModule } from './home/home.module';
import { NewhomeComponent } from './home/newhome/newhome.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { SignupParentComponent } from './home/signup-parent/signup-parent.component';
import { SignupVendorComponent } from './home/signup-vendor/signup-vendor.component';
import { ParentboardComponent } from './munchboard/parentboard/parentboard.component';
import { BabyProfileComponent } from './parent-profile/babydetails/babydetails.component';
import { MunchboardModule } from './munchboard/munchboard.module';
import { BabycardComponent } from './parent-profile/babycard/babycard.component';
import { RecipesearchComponent } from './recipes/recipesearch/recipesearch.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { TipsComponent } from './munchboard/tips/tips.component';
import { RecipedetailsComponent } from './recipes/recipedetails/recipedetails.component';
import { RecipecardComponent } from './recipes/recipecard/recipecard.component';




const routes: Routes = [
  
  {path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  { path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'signupParent',component: SignupParentComponent},
  {path: 'signupVendor',component: SignupVendorComponent},
  {path: 'parentprofile',component: ParentUserProfileComponent},
  {path: 'babyprofile',component: BabyProfileComponent},
  {path: 'babycard',component: BabycardComponent},
  {path:'recipedetails',component:RecipedetailsComponent},
  {path:'recipecard',component:RecipecardComponent},
  
  {path: 'homepage',component: HomepageComponent,children: [
  

    
      // { 
      //   path: 'homepage', 
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
      // },
  ]
},
  {
    path: 'shared',
    component: SharedlayoutComponent,
    children: [
      { path: '', redirectTo: 'munchboard', pathMatch: 'full' }, 
      { path: 'munchboard', component: ParentboardComponent },
      { path: 'showtips', component: TipsComponent },

      { path: 'parentuserprofile', component: ParentUserProfileComponent },
      {path:'recipesearch',component:RecipesearchComponent},
      {path:'recipedetails',component:RecipedetailsComponent},


      // {path:'munchboard',loadChildren:()=>import('./munchboard/munchboard.module').then(m=>m.MunchboardModule)},
      { path: 'parentprofile', loadChildren: () => import('./parent-profile/parent-profile.module').then(m => m.ParentProfileModule) },
      { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },

    ]
  },
// {path:'shared',component:ParentUserProfileComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
