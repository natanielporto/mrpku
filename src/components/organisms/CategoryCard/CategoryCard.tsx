import { Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MajorCategory, Recipe } from "../../../services/recipe/types";
import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";
import { useRef } from "react";
import { ButtonCard } from "../../atoms/ButtonCard/ButtonCard";
interface Data {
  data: MajorCategory;
}

export const CategoryCard = ({ data }: Data) => {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();

  const handleCategoriesSelect = (text: string) => {
    if (text === "Bebidas e cremes")
      navigation.navigate("drinksAndCreams", { category: data.category });

    if (text === "Biscoitos e bolachas")
      navigation.navigate("biscuitsAndCrackers", { category: data.category });

    if (text === "Bolos e bolinhos")
      navigation.navigate("cakesAndLittleCakes", { category: data.category });

      if (text === "Doces")
      navigation.navigate("sweets", { category: data.category });

    // navigation.navigate("", { category: data.category });
    // navigation.navigate("detail", { recipeId: id });
  };

  return (
    <ButtonCard
      category={data.category}
      image={data.image}
      onPress={handleCategoriesSelect}
      key={data.category}
    />
  );
};
