import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import { Recipe } from "../../../typesAndInterfaces/type";
import { supabase } from "../../../services/supabase";
import { List } from "../../molecules/List/List";
import { Title } from "../../atoms/Title/Title";

const fakeRecipe = [
  "Polpa de 1 abacate maduro e firme amassada com um garfo e regada com suco de limão para não escurecer;",
  "1/2 cebola roxa picadinha;",
  "1/2 pimenta dedo-de-moça picadinha;",
  "Azeite de oliva e sal a gosto;",
  "Licor ou suco de laranja a gosto.",
];

const fakePreparation = [
  "Misture o abacate com a cebola e a pimenta.",
  "Tempere com azeite e sal e incorpore licor ou suco de laranja a gosto.",
  "Sirva em pequenas taças, decoradas, se desejar, com legumescrus em palitos.",
];

type RouteParamsProps = {
  recipeId: string;
};

export function RecipeDetail() {
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);

  const navigation = useNavigation();
  const route = useRoute();

  const { recipeId } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    supabase
      .from("MRPKU_recipe")
      .select("*")
      .eq("id", recipeId)
      .single()
      .then(({ data, error }) => {
        setRecipe(data as Recipe);
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
            data={fakeRecipe}
            iconName="circle"
            iconSize={6}
            lessTopMargin
          />

          <List
            data={fakePreparation}
            iconName="check"
            listTitle="Modo de preparo:"
          />
        </>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
}
