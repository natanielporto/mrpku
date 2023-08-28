import { createStackNavigator } from "@react-navigation/stack";
import { RecipeDetail } from "../../organisms/RecipeDetails/RecipeDetails";
import { RecipeLists } from "../../organisms/RecipeLists/RecipeLists";
import { RecipeRoute } from "../../../typesAndInterfaces/types";
import { CategoryLists } from "../../organisms/CategoryList/CategoryList";

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
        component={CategoryLists}
        initialParams={{ from: "home" }}
      />
      <Screen name="drinksAndCreams" component={RecipeLists} />
      <Screen name="biscuitsAndCrackers" component={RecipeLists} />
      <Screen name="detail" component={RecipeDetail} />
    </Navigator>
  );
}
