import { useLayoutEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import recipes from "../../../recipes/recipes.json";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { MajorCategory } from "../../../services/recipe/types";


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
