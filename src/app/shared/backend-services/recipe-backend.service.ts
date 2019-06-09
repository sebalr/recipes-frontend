import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/constants';
import { RecipeDTO } from '../dtos/recipe.dto';

@Injectable({
  providedIn: 'root'
})
export class RecipeBackendService {

  constructor(private httpClient: HttpClient) { }

  public async getAll(): Promise<Array<RecipeDTO>> {
    const recipes = new Array<RecipeDTO>();

    const res = await this.httpClient.get<any>(`${apiUrl}/recipe`).toPromise();

    for (const item of res) {
      recipes.push(RecipeDTO.prepareFromJson(item));
    }
    return recipes;
  }

  public async getById(id: number): Promise<RecipeDTO> {
    const res = await this.httpClient.get<any>(`${apiUrl}/recipe/${id}`).toPromise();
    return RecipeDTO.prepareFromJson(res);
  }

}
