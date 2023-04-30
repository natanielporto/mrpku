import { Database } from "../database";
import { RecipeMapper } from "./mapper";

import { Recipe } from "./types";

export class RecipeService {
  constructor() {}

  async all(): Promise<Recipe[]> {
    const recipes = await Database.instance.sql("SELECT * FROM recipe");
    return recipes.map((recipe: any) => RecipeMapper.toDomain(recipe));
  }

  async getById(id: string): Promise<Recipe> {
    const [recipe] = await Database.instance.sql(
      "SELECT * FROM recipe WHERE id = ?",
      [id]
    );
    return RecipeMapper.toDomain(recipe);
  }
}
