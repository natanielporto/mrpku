import { createStackNavigator } from "@react-navigation/stack";
import { RecipeDetail } from "../../organisms/RecipeDetails/RecipeDetails";
import { RecipeLists } from "../../organisms/RecipeLists/RecipeLists";
import { RecipeRoute } from "../../../typesAndInterfaces/type";

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
        component={RecipeLists}
        initialParams={{ from: "home" }}
      />
      <Screen name="detail" component={RecipeDetail} />
    </Navigator>
  );
}
