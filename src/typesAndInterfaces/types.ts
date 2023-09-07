import { StackNavigationProp } from "@react-navigation/stack";

export type RecipeNavigatorRoutesProps = StackNavigationProp<RecipeRoute>;

export type RecipeRoute = {
  list: {
    from: "home" | "favorites";
  };
  drinksAndCreams: {
    from: "home";
  };
  biscuitsAndCrackers: {
    from: "home";
  };
  cakesAndLittleCakes: {
    from: "home";
  };
  detail: {
    recipeId: string;
  };
};
