import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RecipeBackendService {

  constructor(private httpClient: HttpClient) { }

  public async getAll(): Promise<Array<Recipe>> {
    const recipes = new Array<Recipe>();

    const res = await this.httpClient.get<any>(`${apiUrl}/recipe`).toPromise();

    for (const item of res) {
      recipes.push(Recipe.prepareFromJson(item));
    }
    return recipes;
  }

}
