import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ShoppingListEditComponent } from './Header/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Header/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Header/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Header/recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './Header/header.component';
import { ShoppingComponent } from './Header/shopping/shopping.component';
import { RecipiesComponent } from './Header/recipe/recipies.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
