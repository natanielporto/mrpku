import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

type RouteParamsProps = {
  recipeId: string;
};

export function RecipeDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { recipeId } = route.params as RouteParamsProps;
  // TODO: fetch recipe by id
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#888" />
        </TouchableOpacity>
        <Text>Recipe Detail {recipeId}</Text>
      </View>
    </SafeAreaView>
  );
}
