import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import { List } from "../../molecules/List/List";
import { Title } from "../../atoms/Title/Title";
import { Recipe } from "../../../services/recipe/types";
import { RecipeService } from "../../../services/recipe";
import { Text } from "../../atoms/text";

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

  return (
    <SafeAreaView className="flex-1 p-5 bg-bgLight">
      {recipe ? (
        <>
          <View className="flex-row items-center mb-4">
            <TouchableOpacity onPress={handleGoBack}>
              <Feather name="arrow-left" size={24} color="#888" />
            </TouchableOpacity>
            <Title title={recipe.name} />
          </View>
          <View>
            <Image
              source={{ uri: recipe.image }}
              className="w-full h-200 object-cover rounded-2xl"
            />
          </View>

          <Title title="Ingredientes" underline />

          <List
            data={recipe.ingredients}
            iconName="circle"
            iconSize={6}
            lessTopMargin
          />

          <Title title="Modo de preparo" underline />
          <Text>{recipe.preparation}</Text>
        </>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
}
