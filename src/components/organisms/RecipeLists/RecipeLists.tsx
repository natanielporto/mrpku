import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { supabase } from "../../../services/supabase";
import { Recipe } from "../../../typesAndInterfaces/type";
import { RecipeCard } from "../Card/RecipeCard";

export function RecipeLists() {
  const [list, setList] = useState<Recipe[]>([]);

  useEffect(() => {
    supabase
      .from("MRPKU_recipe")
      .select("*")
      .then(({ data, error }) => {
        if (error) return;

        setList(
          data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image ?? "",
          }))
        );
      });
  });

  return (
    <SafeAreaView className="flex-1 bg-bgLight m-6">
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </SafeAreaView>
  );
}
