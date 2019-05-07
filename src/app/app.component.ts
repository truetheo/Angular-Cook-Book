import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickName: string = 'initial';
  title = 'cook-book';

  OnNameRecive(filerName: string) {
    this.clickName = filerName.toString();
    console.log("This is in the app component: " + filerName);
  }
  IsRecipes(pick) {
    if (pick == 'Recipes') {
      return true;
    } else {
      return false;
    }

  }
}
