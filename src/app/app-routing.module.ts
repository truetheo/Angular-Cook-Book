import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from './Header/recipe/recipies.component';
import { ShoppingComponent } from './Header/shopping/shopping.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full' },
    { path: 'recipies', component: RecipiesComponent },
    { path: 'shopping-list', component: ShoppingComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}