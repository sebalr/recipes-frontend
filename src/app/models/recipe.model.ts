export class Recipe {

  id: number;
  title: string;
  description: string;

  public constructor() { }

  public static prepareFromJson(json: any): Recipe {
    const recipe = new Recipe();

    recipe.id = json.id ? json.id : 0;
    recipe.title = json.title ? json.title : undefined;
    recipe.description = json.description ? json.description : undefined;

    return recipe;
  }

}
