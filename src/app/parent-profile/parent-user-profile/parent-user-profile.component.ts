import { Component,OnDestroy  } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BabyProfileComponent } from '../babydetails/babydetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-parent-user-profile',
  templateUrl: './parent-user-profile.component.html',
  styleUrl: './parent-user-profile.component.css',
  providers:[DialogService]
})
export class ParentUserProfileComponent {

  displayDialog: boolean = false;



  showDialog() {

    this.displayDialog = true;
      
  }

 
  dropdowns: { [key: string]: boolean } = {
    history: false,
    account: false
  };

  toggleDropdown(menu: 'history' | 'account') {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  user = {
    name: 'Shenoli Jayasinghe',
    email: 'shenoli@example.com',
    phone: '123-456-7890',

  };
  
}
