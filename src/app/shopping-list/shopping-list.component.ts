import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    // need to update our list of ingredients every time a new one has been added.
    this.shoppingListService.ingredientAdded.subscribe(
      () => {
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );
  }
}
