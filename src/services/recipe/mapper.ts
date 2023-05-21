import { Recipe } from "./types";

export class RecipeMapper {
  static toDomain(recipe: any): Recipe {
    return {
      id: recipe.id,
      name: recipe.name,
      category: recipe.category,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
      image: recipe.image,
    };
  }
}
