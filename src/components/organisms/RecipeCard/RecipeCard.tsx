import { useNavigation } from "@react-navigation/native";
import { RecipeNavigatorRoutesProps } from "../../../typesAndInterfaces/types";
import { Recipe } from "../../../services/recipe/types";
import { ButtonCard } from "../../atoms/ButtonCard/ButtonCard";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  const navigation = useNavigation<RecipeNavigatorRoutesProps>();
  const { image, name } = recipe;

  function handleRecipeSelect() {
    navigation.navigate("detail", { recipe });
  }

  return (
    <ButtonCard onPress={handleRecipeSelect} category={name} image={image} />
  );
}
