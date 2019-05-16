import { Recipe } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping/shopping-list-edit/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) { };

    private recipes: Recipe[] = [
        new Recipe("Tasty Schnitzel", "This is simply a test", "https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg",
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]),
        new Recipe("Big Fat Burger", "What else?", "https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg",
            [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
    addToShoppingList(ingredients: Ingredient[]) {
        // this.slService.addIngredient(ingredient);
        this.slService.addIngredients(ingredients);
    }

}