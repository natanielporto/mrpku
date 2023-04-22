import { Image, Text, TouchableOpacity } from "react-native";
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
      style={{
        flex: 1,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
      onPress={handleRecipeSelect}
    >
      <Image
        source={{ uri: recipe.image }}
        style={{ width: 40, height: 40, borderRadius: 4 }}
      />
      <Text>{recipe.name}</Text>
    </TouchableOpacity>
  );
}
