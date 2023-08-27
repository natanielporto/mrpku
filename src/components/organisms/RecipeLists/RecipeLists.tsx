import { useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { RecipeService } from "../../../services/recipe";
import { Recipe } from "../../../services/recipe/types";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import recipes from "../../../recipes/recipes.json";
import { CategoryCard } from "../CategoryCard/CategoryCard";
const recipeService = new RecipeService();

export function RecipeLists() {
  const [list, setList] = useState<any[]>([]);

  useLayoutEffect(() => {
    setList(recipes);
    // recipeService.all().then((recipes) => {
    //   setList(recipes);
    // });
  }, []);

  console.log(list);
  return (
    <SafeAreaView className="flex-1 pt-2">
      <FlatList
        data={list}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View className="py-2 shadow-sm">
            <CategoryCard data={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
