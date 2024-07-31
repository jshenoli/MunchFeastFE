import { Component ,OnInit } from '@angular/core';

interface Recipe {
  name: string;
  rating: number;
  calories: number;
  lastUpdated: string;
  isFavorite: boolean;
}
@Component({
  selector: 'app-recipesearch',
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchName: string = '';
  searchIngredient: string = '';
  sortOption: string = '';

  constructor() { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    // Simulating backend data fetching by hardcoding the data
    this.recipes = [
      {
        name: 'Apple Pie',
        rating: 4.5,
        calories: 250,
        lastUpdated: '2024-07-16',
        isFavorite: false
      },
      {
        name: 'Banana Bread',
        rating: 4.8,
        calories: 300,
        lastUpdated: '2024-07-15',
        isFavorite: true
      }
    ];
    this.filteredRecipes = this.recipes;
  }

  searchRecipes(): void {
    this.filteredRecipes = this.recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
      recipe.name.toLowerCase().includes(this.searchIngredient.toLowerCase())
    );
    this.sortRecipes();
  }

  sortRecipes(): void {
    if (this.sortOption === 'lastUpdated') {
      this.filteredRecipes.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
    } else if (this.sortOption === 'rating') {
      this.filteredRecipes.sort((a, b) => b.rating - a.rating);
    }
  }

  toggleFavorite(recipe: Recipe): void {
    recipe.isFavorite = !recipe.isFavorite;
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes = this.recipes.filter(r => r !== recipe);
    this.searchRecipes();
  }
}