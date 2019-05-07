import { Component, OnInit } from '@angular/core';
import { Recipe } from './recepie.model';

@Component({
    selector: 'app-recipies',
    templateUrl: './recipies.component.html',
    styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor() { }

    ngOnInit() {
    }
    OnRecipeSelected(recipeSelected: Recipe) {
        this.selectedRecipe = recipeSelected;
    }
}