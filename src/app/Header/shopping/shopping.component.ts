import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient("Tomatoes", 10)
    ];
    constructor() { }

    ngOnInit() {
    }
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}