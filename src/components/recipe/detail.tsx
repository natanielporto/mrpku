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
          <Text
            // className="text-2xl"
            style={{ fontWeight: "700", fontSize: 24 }}
          >
            {recipe.name}
          </Text>
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
        <View
          style={{
            borderBottomWidth: "4",
            borderBottomColor: "green",
            marginTop: 50,
            marginBottom: 10,
            width: "37%",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            Ingredientes
          </Text>
        </View>

        <FlatList
          data={fakeRecipe}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row", maxWidth: "95%" }}>
              <Feather
                name="circle"
                size={6}
                color="green"
                style={{ marginTop: 8, marginRight: 3 }}
              />
              <Text style={{ lineHeight: 20 }}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Modo de preparo:
          </Text>
          <FlatList
            data={fakePreparation}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "row", maxWidth: "95%" }}>
                <Feather
                  name="check"
                  size={14}
                  color="green"
                  style={{ marginTop: 3, marginRight: 3 }}
                />
                <Text style={{ lineHeight: 20 }}>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </SafeAreaView>
    )
  );
}
