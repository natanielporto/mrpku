import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";
import { Title } from "../../atoms/Title/Title";
import { Recipe } from "../../../services/recipe/types";
import { RecipeIcons } from "../../molecules/RecipeIcons/RecipeIcons";
// import { Pill } from "../../atoms/Pill/Pill";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();
  const { id, image, name } = recipe;

  function handleRecipeSelect() {
    navigation.navigate("detail", { recipeId: id });
  }

  return (
    <TouchableOpacity
      className="flex-1 flex-row rounded-3xl bg-green-50 h-[140] w-[93%] mx-auto relative"
      onPress={handleRecipeSelect}
    >
      <View className="transform rotate-[20deg] mt-8 absolute right-[-23px]">
        <Ionicons name="leaf-outline" size={95} color="#F2F1EF" />
      </View>
      <Text>{name}</Text>
      <Image source={{ uri: image }} />
    </TouchableOpacity>
  );
}
