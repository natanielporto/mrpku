import { ScrollView, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useLayoutEffect, useMemo, useState } from "react";
import { Title } from "../../atoms/Title/Title";
import { Recipe } from "../../../services/recipe/types";
import { RecipeService } from "../../../services/recipe";
import { Text } from "../../atoms/Text";

type RouteParamsProps = {
  recipeId: string;
};

const recipeSerivce = new RecipeService();

export function RecipeDetail() {
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);

  const navigation = useNavigation();
  const route = useRoute();

  const { recipeId } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    recipeSerivce.getById(recipeId).then((recipe) => {
      setRecipe(recipe);
    });
  }, [recipeId]);

  const recipes = useMemo(
    () =>
      recipe.ingredients?.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      )),
    [recipe]
  );

  return (
    <SafeAreaView className="flex-1 px-5 bg-bgLight">
      {recipe ? (
        <View>
          <View className="bg-orange mb-4">
            <View className="flex-row items-center mb-4">
              <TouchableOpacity onPress={handleGoBack} className="mr-1">
                <Feather name="arrow-left" size={24} color="#888" />
              </TouchableOpacity>
              <Title title={recipe.name} />
            </View>
            <View>
              <Image
                source={{ uri: recipe.image || "" }}
                className="w-full h-200 object-cover rounded-2xl"
              />
            </View>
          </View>
          <ScrollView className="bg-red">
            <Title title="Ingredientes" underline />
            {recipes}
            <Title title="Modo de preparo" underline />
            <Text>{recipe.preparation}</Text>
          </ScrollView>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
