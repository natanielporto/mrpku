import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { supabase } from "../../services/supabase";
import { RecipeCard } from "./card";
import { Recipe } from "./type";

export function RecipeList() {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa", margin: 24 }}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </SafeAreaView>
  );
}
