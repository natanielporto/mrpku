import { StackNavigationProp } from "@react-navigation/stack";

export type Recipe = {
  id: string;
  name: string;
  image: string;
};

export type RecipeNavigatorRoutesProps = StackNavigationProp<RecipeRoute>;

export type RecipeRoute = {
  list: {
    from: "home" | "favorites";
  };
  detail: {
    recipeId: string;
  };
};
