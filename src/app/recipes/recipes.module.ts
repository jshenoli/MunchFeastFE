import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesearchComponent } from './recipesearch/recipesearch.component';
import { BrowserModule } from '@angular/platform-browser';

import{ReactiveFormsModule} from '@angular/forms';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component'
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { RecipecardComponent } from './recipecard/recipecard.component';





@NgModule({
  declarations: [
    RecipesearchComponent,
    RecipedetailsComponent,
    RecipecardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    ChipModule,
    TagModule,
    FormsModule,
    DialogModule
  
  ]
})
export class RecipesModule { }
