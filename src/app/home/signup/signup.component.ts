import { Component } from '@angular/core';
import { SignupParentComponent } from '../signup-parent/signup-parent.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router) {}
  signup(){}
 
   joinAsParent() {
    this.router.navigate(['/home/signupParent']);

    ;

  }

  joinAsVendor() {
    this.router.navigate(['/home/signupVendor']);

    ;

  }

  signIn(){
    this.router.navigate(['/login'])
  }

}
