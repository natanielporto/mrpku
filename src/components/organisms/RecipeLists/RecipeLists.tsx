import { useLayoutEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Recipe } from "../../../services/recipe/types";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import recipes from "../../../recipes/recipes.json";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";

export function RecipeLists() {
  const [list, setList] = useState<Recipe[]>([]);
  const route = useRoute();
  const { category } = route.params;
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();

  const result = recipes.find((item) => item.category === category);

  useLayoutEffect(() => {
    setList(result?.recipes);
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView className="flex-1 pt-2">
      <TouchableOpacity
        onPress={handleGoBack}
        className="flex flex-row items-center ml-4 mb-2"
      >
        <Feather name="arrow-left" size={24} color="#888" />
        <Text className="ml-2">Retornar</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View className="py-2 shadow-sm">
            <RecipeCard recipe={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
