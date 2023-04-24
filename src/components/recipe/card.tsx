import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Recipe } from "./type";
import { RecipeNavigatorRoutesProps } from ".";
import { Button } from "../Button/Button";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();

  function handleRecipeSelect() {
    navigation.navigate("detail", { recipeId: recipe.id });
  }

  return (
    <View>
      <LinearGradient
        colors={["#0c6941", "#8bdfbb"]}
        style={{ borderRadius: 20 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          className="flex-1 p-5 flex-row items-center justify-around gap-2 h-180 rounded-custom w-full bg-gradient-to-r from-green-900 to-green-300"
          onPress={handleRecipeSelect}
        >
          <Image
            source={{ uri: recipe.image }}
            className="w-100 h-100 rounded-custom max-w-fourty"
          />
          <View className="w-sixty">
            <Text className="text-26 text-white font-bold mb-thirty">
              {recipe.name}
            </Text>
            <Button />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
