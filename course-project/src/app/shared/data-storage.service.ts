import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes-list/recipe.model';

@Injectable({ providedIn: "root" })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }
    storeRecipes() {
        const recipes = this.recipeService.getRecipe()
        this.http.put('https://recipe-book-c02a6.firebaseio.com/recipes.json', recipes).subscribe(response => {
            console.log(response)
        })
    }
    fetchRecipes() {
        this.http.get<Recipe[]>('https://recipe-book-c02a6.firebaseio.com/recipes.json').subscribe(
            recipes => {
                console.log("Fetching recipes", recipes)
                this.recipeService.setRecipe(recipes)
            }
        )
    }
}