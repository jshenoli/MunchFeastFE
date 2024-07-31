import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginForm !: FormGroup

  // get getUserName(): AbstractControl { return this.loginForm.get('userName') as AbstractControl; }
  // get getPassword(): AbstractControl { return this.loginForm.get('password') as AbstractControl;}

  // constructor(
  //   private router: Router,
  //   private formBuilder : FormBuilder
  // ) {}

  // login() {
        
  // }
    // Simulate login success

    constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  login() {

    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      this.router.navigate(['/shared']);
    } else {
      alert('Invalid credentials');
    }
  }
 
  }


