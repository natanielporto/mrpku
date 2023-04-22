import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Recipe } from "./type";
import { RecipeNavigatorRoutesProps } from ".";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();

  function handleRecipeSelect() {
    navigation.navigate("detail", { recipeId: recipe.id });
  }

  return (
    <TouchableOpacity
      style={{ flex: 1, padding: 20 }}
      onPress={handleRecipeSelect}
    >
      <Text>{recipe.name}</Text>
    </TouchableOpacity>
  );
}
