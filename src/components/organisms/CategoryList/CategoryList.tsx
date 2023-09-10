import { useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { RecipeService } from "../../../services/recipe";
import { MajorCategory, Recipe } from "../../../services/recipe/types";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import recipes from "../../../recipes/recipes.json";
import { CategoryCard } from "../CategoryCard/CategoryCard";
const recipeService = new RecipeService();

export function CategoryLists() {
  const [list, setList] = useState<MajorCategory[]>([]);

  useLayoutEffect(() => {
    setList(recipes);
  }, []);

  return (
    <SafeAreaView className="flex-1 pt-2">
      <FlatList
        data={list}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View className="py-2">
            <CategoryCard data={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
