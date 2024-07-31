import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-parent',
  templateUrl: './signup-parent.component.html',
  styleUrl: './signup-parent.component.css'
})
export class SignupParentComponent {

  visible: boolean = false; // Initialize as false to hide the dialog initially

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
  
  parentsignup(){}

}
