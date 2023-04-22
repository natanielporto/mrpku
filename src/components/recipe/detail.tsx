import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Recipe } from "./type";
import { useLayoutEffect, useState } from "react";
import { supabase } from "../../services/supabase";

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
      <SafeAreaView
        style={{ flex: 1, padding: 20, backgroundColor: "#fafafa" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <TouchableOpacity onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#888" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "700", fontSize: 24 }}>{recipe.name}</Text>
        </View>
        <View>
          <Image
            source={{ uri: recipe.image }}
            style={{
              width: "100%",
              height: 200,
              resizeMode: "cover",
              borderRadius: 16,
            }}
          />
        </View>
      </SafeAreaView>
    )
  );
}
