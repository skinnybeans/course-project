
import { Recipe } from './recipe-model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
        'My test recipe',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
        new Recipe('Test Recipe 2',
        'My test recipe 2',
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png')
      ];

    getRecipes() {
        // return a new array that is a copy of the current one
        return this.recipes.slice();
    }
}
