import { FlatList, SafeAreaView } from "react-native";
import { RecipeCard } from "./card";
import { Recipe } from "./type";

export function RecipeList() {
  //TODO: Fetch recipes from API
  const recipes: Recipe[] = [
    {
      id: "1",
      name: "Pão de queijo",
      image: "https://i.imgur.com/0Z0QY0H.png",
    },
    {
      id: "2",
      name: "Bolo de cenoura",
      image: "https://i.imgur.com/0Z0QY0H.png",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
      />
    </SafeAreaView>
  );
}
