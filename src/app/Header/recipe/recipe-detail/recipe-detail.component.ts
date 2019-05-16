import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recepie.model';
import { RecipeService } from '../recipes.service';
import { Ingredient } from '../../shared/ingredient.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeDetailed') recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  addIngredientsToShoppingList() {
    //   var recipeIngredients: Ingredient[] = this.recipe.ingredients;
    //   for (let i of recipeIngredients) {
    //     this.recipeService.addToShoppingList(i);
    //   }
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
