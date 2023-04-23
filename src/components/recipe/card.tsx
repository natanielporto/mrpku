import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Recipe } from "./type";
import { RecipeNavigatorRoutesProps } from ".";
import { Button } from "../Button/Button";

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
        backgroundColor: "green",
        height: 180,
        borderRadius: 20,
        justifyContent: "space-around",
      }}
      onPress={handleRecipeSelect}
    >
      <Image
        source={{ uri: recipe.image }}
        style={{ width: 100, height: 100, borderRadius: 4, maxWidth: "40%" }}
      />
      <View style={{ width: "60%" }}>
        <Text
          style={{
            fontSize: 26,
            color: "white",
            fontWeight: 700,
            marginBottom: 30,
          }}
        >
          {recipe.name}
        </Text>
        <Button />
      </View>
    </TouchableOpacity>
  );
}
