import { Component,OnInit } from '@angular/core';

interface Baby {
  babyName: string;
  babyAge: number;
  babyWeight: number;
  lastUpdated: string;
  babyHeight: number;
  activeStatus: string;
  dietaryPreferences: string[];
  allergens: string[];
  dislikes: string[];
  profilePic: string; // Add profilePic property

}
@Component({
  selector: 'app-babycard',
  templateUrl: './babycard.component.html',
  styleUrl: './babycard.component.css'
})
export class BabycardComponent implements OnInit {
  display: boolean = false;
  selectedBaby: Baby | null = null;




  dietaryPreferences:any =[
    { name: 'local', code: 'll' },
  ]
  ingredients: any[] = [
    { name: 'Peanuts', code: 'PN' },
    { name: 'Eggs', code: 'EG' },
    { name: 'Milk', code: 'MK' },
    { name: 'Soy', code: 'SY' },
    { name: 'Wheat', code: 'WH' }
    // Add more ingredients as needed
  ];

  onFileChange(event: any) {
    // const file = event.target.files[0];
    // console.log('File selected:', file);
    // Handle file upload
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.selectedBaby) {
          this.selectedBaby.profilePic = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
  

  showModal(baby: Baby){
    
      this.selectedBaby = { ...baby }; // Create a copy of the selected baby
      this.display = true;

  };

  save() {
    if (this.selectedBaby) {
      const index = this.babies.findIndex(b => b.babyName === this.selectedBaby?.babyName);
      if (index !== -1) {
        this.babies[index] = { ...this.selectedBaby, lastUpdated: new Date().toISOString().split('T')[0] };
      }
    }
    this.display = false;

  }

  cancel() {
    // Logic to cancel the editing
    this.selectedBaby = null;
    this.display = false;

  }

  babies: Baby[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchBabies();
  }

  fetchBabies(): void {
    // Simulating backend data fetching by hardcoding the data
    this.babies = [
      {
        babyName: 'Yuven',
        babyAge: 1,
        babyWeight: 8.5,
        lastUpdated: '2024-07-16',
        babyHeight: 68,
  activeStatus: 'Average',
  dietaryPreferences: ['Egg free'],
  allergens: ['egg'],
  dislikes: ['milk'],
  profilePic: '/toddler.png' // Add profilePic property

      },
      {
        babyName: 'Ahasya',
        babyAge: 2,
        babyWeight: 10.2,
        lastUpdated: '2024-07-15',
        babyHeight: 68,
        activeStatus: 'Average',
        dietaryPreferences: ['milk'],
        allergens: ['milk'],
        dislikes: ['milk'],
        profilePic: '/addbaby.png' // Add profilePic property

      }
    ];
  }
}
