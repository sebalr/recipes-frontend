import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';
import { RecipeDTO } from '../shared/dtos/recipe.dto';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass']
})
export class RecipeComponent implements OnInit {

  public recipes$: Observable<Array<RecipeDTO>>;

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.Recipes;
  }

  ngOnInit() {
    this.recipeService.getAllRecipes();
  }

}
