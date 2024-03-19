import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";
import { Recipe } from "../../../services/recipe/types";
import { ButtonCard } from "../../atoms/ButtonCard/ButtonCard";
import React from "react";
import { AdCard } from "../../atoms/AdCard/AdCard";

type Props = {
  recipe?: Recipe;
  ad?: boolean
};

export function RecipeCard({ recipe, ad = false }: Props) {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();
 
  function handleRecipeSelect() {
    navigation.navigate("detail", { recipe });
  }

  return (
    ad ? <AdCard /> : <ButtonCard onPress={handleRecipeSelect} category={recipe?.name!} image={recipe?.image!} />
  );
}
