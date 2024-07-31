import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-babydetails',
  templateUrl: './babydetails.component.html',
  styleUrls: ['./babydetails.component.css']
})
// export class BabyProfileComponent {
  // name: string;
  // age: number;
  // height: number;
  // weight: number;
  // status: string = 'Moderate';
  // dietaryPreferences: string[] = ['Vegetarian', 'Gluten-Free'];
  // selectedDislikes: string[];
  // selectedAllergens: string[];
  // ageInMonths: { age: string }[];
  // selectedAge: { age: string } = { age: '' };

  // user = {
  //   name: 'Shenoli Jayasinghe',
  //   email: 'shenoli@example.com',
  //   phone: '123-456-7890'
  // };

  // dislikes: any[] = [
  //   { label: 'Broccoli', value: 'Broccoli' },
  //   { label: 'Carrots', value: 'Carrots' },
  //   { label: 'Milk', value: 'Milk' },
  //   { label: 'Peanuts', value: 'Peanuts' }
  // ];

  // allergens: any[] = [
  //   { label: 'Nuts', value: 'Nuts' },
  //   { label: 'Shellfish', value: 'Shellfish' },
  //   { label: 'Eggs', value: 'Eggs' },
  //   { label: 'Soy', value: 'Soy' }
  // ];

  // constructor() {
  //   this.weight = 0; // Initialize default values
  //   this.height = 0;
  //   this.age = 0;
  //   this.name = '';
  //   this.selectedAllergens = [];
  //   this.selectedDislikes = [];
  //   this.dietaryPreferences = [];
   
  //   this.ageInMonths = Array.from({ length: 24 }, (v, k) => ({ age: `${k + 1} month${k + 1 > 1 ? 's' : ''}` }));
  // }
  export class BabyProfileComponent {
    user: any = {
      babyName: '',
      weight: null,
      height: null,
      activeLevel: 'Moderate',
      dietaryPreferences: [],
      allergenPreferences: [],
      dislikePreferences: []
    };
  
    selectedAge: any;
    ageInMonths: SelectItem[] = [
      { label: '1 month', value: '1 month' },
      { label: '2 months', value: '2 months' },
      { label: '3 months', value: '3 months' },
      // Add more options as needed
    ];
  
    dietaryOptions: SelectItem[] = [
      { label: 'Vegan', value: 'Vegan' },
      { label: 'Vegetarian', value: 'Vegetarian' },
      { label: 'Non-Vegetarian', value: 'Non-Vegetarian' },
      { label: 'Gluten-Free', value: 'Gluten-Free' },
      // Add more options as needed
    ];
  
    allergenOptions: SelectItem[] = [
      { label: 'Peanuts', value: 'Peanuts' },
      { label: 'Shellfish', value: 'Shellfish' },
      { label: 'Dairy', value: 'Dairy' },
      { label: 'Soy', value: 'Soy' },
      // Add more options as needed
    ];
  
    dislikeOptions: SelectItem[] = [
      { label: 'Broccoli', value: 'Broccoli' },
      { label: 'Brussels Sprouts', value: 'Brussels Sprouts' },
      { label: 'Spinach', value: 'Spinach' },
      { label: 'Carrots', value: 'Carrots' },
      // Add more options as needed
    ];
  
    selectedDietaryPreferences: any[] = [];
    selectedAllergenPreferences: any[] = [];
    selectedDislikePreferences: any[] = [];
  
    constructor() {}
  
    save() {
      // Save logic here
      console.log('User details saved:', this.user);
    }
  
    cancel() {
      // Cancel logic here
      console.log('User details update canceled.');
    }
  }