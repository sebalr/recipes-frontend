import { Component, OnInit } from '@angular/core';
import { RecipeBackendService } from './services/recipe-backend.service';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Recipes to cook';

  public recipes: Promise<Array<Recipe>>;

  constructor(private recipeService: RecipeBackendService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAll();
  }
}
