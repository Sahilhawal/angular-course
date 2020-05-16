import { Recipe } from './recipes-list/recipe.model';
import { Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Yummy!',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
      [new Ingredients('tomato', 2), new Ingredients('cheese', 5)]
    ),
    new Recipe(
      'Momo',
      'Spicy!',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png',
      [new Ingredients('Chicken', 1), new Ingredients('Masala', 4)]
    ),
  ];


  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeDetail(index: number) {
    return this.recipes[index];
  }
  constructor(private shoppingList: ShoppingListService) { }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingList.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice())
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
    console.log("setting up recipes", recipes, this.recipes.slice())
  }

}
