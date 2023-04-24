import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Recipe,
  RecipeNavigatorRoutesProps,
} from "../../../typesAndInterfaces/type";
import Btn from "../../atoms/Button/Button";
import { LinearGradient } from "../../atoms/LinearGradient/LinearGradient";
import { Title } from "../../atoms/Title/Title";

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
      <LinearGradient>
        <TouchableOpacity
          className="flex-1 p-5 flex-row items-center justify-around gap-2 h-180 rounded-custom w-full bg-gradient-to-r from-green-900 to-green-300"
          onPress={handleRecipeSelect}
        >
          <Image
            source={{ uri: recipe.image }}
            className="w-100 h-100 rounded-custom max-w-fourty"
          />
          <View className="w-sixty">
            <Title
              title={recipe.name}
              customClass="text-26 text-white font-bold mb-thirty"
            />
            <Btn
              action="Confira"
              accessibilityLabel="Acesse a receita apertando aqui"
              onPress={handleRecipeSelect}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
