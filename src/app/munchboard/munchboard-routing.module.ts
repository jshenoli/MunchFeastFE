import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentboardComponent } from './parentboard/parentboard.component';
import { BabycardComponent } from '../parent-profile/babycard/babycard.component';






const routes: Routes = [
  { path: '', component: ParentboardComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunchboardRoutingModule { }
