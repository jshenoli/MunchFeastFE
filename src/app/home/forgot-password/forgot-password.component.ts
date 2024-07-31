import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email: string = '';

  onSubmit() {
    if (this.email) {
      // Handle the forgot password logic here
      console.log('Reset link sent to:', this.email);
      // You can call your service to send the reset link here
    }
  }


  
}
