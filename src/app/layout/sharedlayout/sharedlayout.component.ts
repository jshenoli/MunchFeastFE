import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedlayout',
  templateUrl: './sharedlayout.component.html',
  styleUrl: './sharedlayout.component.css'
})
export class SharedlayoutComponent  {

  
  // sidebarVisible: boolean = false;
  // userName: string = 'User';  // Replace with dynamic user name if needed
  // activeSection: string = '';
  // activeSubsection: string = '';

  // openSidebar(): void {
  //   this.sidebarVisible = true;
  // }

  // closeSidebar(): void {
  //   this.sidebarVisible = false;
  // }

  // toggleSection(section: string): void {
  //   this.activeSection = this.activeSection === section ? '' : section;
  // }

  // toggleSubsection(subsection: string): void {
  //   this.activeSubsection = this.activeSubsection === subsection ? '' : subsection;
  // }



  sidebarVisible: boolean = true;
  visibledownSidebar: boolean = false;

  userName: string = 'Shenoli';  // Replace with dynamic user name if needed
  activeSection: string = '';
  activeSubsection: string = '';

  openSidebar(): void {
    this.sidebarVisible = true;
  }

  closeSidebar(): void {
    this.sidebarVisible = false;
  }

  toggleSection(section: string): void {
    this.activeSection = this.activeSection === section ? '' : section;
  }

  toggleSubsection(subsection: string): void {
    this.activeSubsection = this.activeSubsection === subsection ? '' : subsection;
  }

  contact: any = {};

  onSubmit(form: any) {
    if (form.valid) {
      // Process the form data
      console.log('Form Submitted', this.contact);

      
    }
    
  }
  onSidebarHide() {
    this.visibledownSidebar = false;
}
}
