import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Recipe } from "./type";
import { useLayoutEffect, useState } from "react";
import { supabase } from "../../services/supabase";
import { FlatList } from "react-native-gesture-handler";

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
    recipe && (
      <SafeAreaView className="flex-1 p-5 bg-bgLight">
        <View className="flex-row items-center gap-2 mb-4">
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#888" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold">{recipe.name}</Text>
        </View>
        <View>
          <Image
            source={{ uri: recipe.image }}
            className="w-full h-200 object-cover rounded-2xl"
          />
        </View>
        <View className="border-b-4 border-b-green mt-fifty mb-ten w-tirtySeven">
          <Text className="font-bold text-2xl">Ingredientes</Text>
        </View>

        <View>
          <FlatList
            data={fakeRecipe}
            renderItem={({ item }) => (
              <View className="flex flex-row max-w-ninetyFive">
                <View className="mt-2 mr-three">
                  <Feather name="circle" size={6} color="green" />
                </View>
                <Text className="leading-5">{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>

        <View>
          <Text className="text-base font-bold mb-ten mt-10">
            Modo de preparo:
          </Text>
          <FlatList
            data={fakePreparation}
            renderItem={({ item }) => (
              <View className="flex flex-row max-w-ninetyFive">
                <View className="mt-three mr-three">
                  <Feather name="check" size={14} color="green" />
                </View>
                <Text className="leading-5">{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </SafeAreaView>
    )
  );
}
