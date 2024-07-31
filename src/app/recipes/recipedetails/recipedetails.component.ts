import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrl: './recipedetails.component.css'
})
export class RecipedetailsComponent implements OnInit {
displayDialog: any;
display: boolean = false;
displayvendor:boolean=false;

  showdialog(){
    this.display= true;
  }

  recipe = {
    name: 'Chicken Steak',
    description: 'Chicken Steak Recipe With Pan Roasted Vegetables & Potato Mash...',
    cookTime: 30,
    difficulty: 'Medium',
    calories: 350,
    tags: ['High Protein', 'Low Carb', 'Gluten Free'],
    ingredients: ['Chicken', 'Honey', 'Olive oil', 'Eggs'],
    directions: ['Marinate the chicken', 'Heat the pan', 'Cook the chicken', 'Serve with vegetables'],
    nutrition: {
      protein: 25,
      fats: 15,
      carbs: 10
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
