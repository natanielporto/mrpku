import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RecipeDetail } from "./detail";
import { RecipeList } from "./list";

type RecipeRoute = {
  list: {
    from: "home" | "favorites";
  };
  detail: {
    recipeId: string;
  };
};

export type RecipeNavigatorRoutesProps = StackNavigationProp<RecipeRoute>;

const { Navigator, Screen } = createStackNavigator<RecipeRoute>();

export function Recipe() {
  return (
    <Navigator
      initialRouteName="list"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="list"
        component={RecipeList}
        initialParams={{ from: "home" }}
      />
      <Screen name="detail" component={RecipeDetail} />
    </Navigator>
  );
}
