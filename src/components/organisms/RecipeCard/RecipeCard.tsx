import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title/Title";
import { Recipe } from "../../../services/recipe/types";
import { RecipeIcons } from "../../molecules/RecipeIcons/RecipeIcons";

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
    <View>
      <TouchableOpacity
        className="flex-1 flex-row rounded-md bg-white bg-blue-400"
        style={{ elevation: 3 }}
        onPress={handleRecipeSelect}
      >
        <Image
          source={{ uri: image || "" }}
          className="w-120 mr-5 h-full rounded-l-md"
        />
        <View className="h-28 justify-between py-3 bg-red">
          <Title title={name} customClass="text-xl text-slate-700" />
          <View className="flex-1 flex-row items-center justify-between bg-lime-300">
            <Button
              action="Confira"
              accessibilityLabel="Acesse a receita pressionando aqui"
              onPress={handleRecipeSelect}
            />
            <RecipeIcons />
          </View>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        className="flex-1 p-5 flex-row items-center justify-around h-150 rounded w-full bg-white"
        style={{ elevation: 1 }}
        onPress={handleRecipeSelect}
      >
        <Image
          source={{ uri: recipe.image || "" }}
          className="w-100 h-100 rounded-custom max-w-fourty"
        />
        <View className="w-sixty">
          <Title
            title={recipe.name}
            customClass="text-26 text-black font-bold mb-thirty"
          />
          <Button
            action="Confira"
            accessibilityLabel="Acesse a receita apertando aqui"
            onPress={handleRecipeSelect}
          />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}
