import { useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { RecipeService } from "../../../services/recipe";
import { Recipe } from "../../../services/recipe/types";
import { RecipeCard } from "../Card/RecipeCard";

const recipeService = new RecipeService();

export function RecipeLists() {
  const [list, setList] = useState<Recipe[]>([]);

  useLayoutEffect(() => {
    recipeService.all().then((recipes) => {
      setList(recipes);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-bgLight m-6">
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="py-2">
            <RecipeCard recipe={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
