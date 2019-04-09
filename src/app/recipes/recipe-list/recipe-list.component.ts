import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe-model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'My test recipe',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
    new Recipe('Test Recipe 2',
    'My test recipe 2',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
