import { StackNavigationProp } from "@react-navigation/stack";

export type RecipeNavigatorRoutesProps = StackNavigationProp<RecipeRoute>;

export type RecipeRoute = {
  list: {
    from: "home" | "favorites";
  };
  detail: {
    recipeId: string;
  };
};
