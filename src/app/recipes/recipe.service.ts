import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
        'My test recipe',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        [new Ingredient('chicken', 1), new Ingredient('lettuce', 2)]),
        new Recipe('Test Recipe 2',
        'My test recipe 2',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        [new Ingredient('mince', 3), new Ingredient('pasta', 2)])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        // return a new array that is a copy of the current one
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
