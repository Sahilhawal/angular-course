import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipes-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm()
    });
  }
  onSubmit() {
    console.log(this.recipeForm)
    const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients'])
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe)
    }
    this.router.navigate(['../'], { relativeTo: this.route })

  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  private initForm() {
    let recipeName = "";
    let recipeImagePath = ""
    let recipeDescription = ""
    let recipeIngredients = new FormArray([])
    if (this.editMode) {
      const recipeDetail = this.recipeService.getRecipeDetail(this.id)
      recipeName = recipeDetail.name
      recipeImagePath = recipeDetail.imagePath
      recipeDescription = recipeDetail.description
      if (recipeDetail['ingredients']) {
        for (let ingredient of recipeDetail.ingredients) {
          recipeIngredients.push(new FormGroup({
            "name": new FormControl(ingredient.name),
            "amount": new FormControl(ingredient.amount)
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    })
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      "name": new FormControl([]),
      "amount": new FormControl([])
    }))
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
