import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeDetailed') recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
