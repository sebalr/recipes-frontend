import { Injectable } from '@angular/core';
import { RecipeBackendService } from '../shared/backend-services/recipe-backend.service';
import { Subject } from 'rxjs';
import { RecipeDTO } from '../shared/dtos/recipe.dto';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes = new Subject<Array<RecipeDTO>>();

  get Recipes() { return this.recipes.asObservable(); }

  constructor(private recipeBackend: RecipeBackendService) { }

  public async getAllRecipes(): Promise<void> {
    const res = await this.recipeBackend.getAll();
    if (res) {
      this.recipes.next(res);
    }
  }

  public async getRecipe(id: number): Promise<RecipeDTO> {
    const res = await this.recipeBackend.getById(id);
    return res;
  }
}
