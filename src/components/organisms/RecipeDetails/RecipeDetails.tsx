import { ScrollView, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Title } from "../../atoms/Title/Title";
import { Recipe } from "../../../services/recipe/types";

type RouteParamsProps = {
  recipe: Recipe;
};

export function RecipeDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { recipe } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="flex-1 px-5 bg-bgLight">
      {recipe ? (
        <View>
          <View className="mb-4">
            <View className="flex-row items-center mb-4">
              <TouchableOpacity
                onPress={handleGoBack}
                className="mr-1 flex flex-row items-center"
              >
                <Feather name="arrow-left" size={24} color="#888" />
                <Title title={recipe.name} />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={{ uri: recipe.image || "" }}
                className="w-full h-200 object-cover rounded-2xl"
              />
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            <Title title="Ingredientes" underline />
            <View className="bg-white p-4 rounded-2xl">
              {recipe.ingredients.map((item) => (
                <Text className="mb-2" key={item}>
                  {item}
                </Text>
              ))}
            </View>

            <View className="mt-2" />

            <Title title="Modo de preparo" underline />
            <View className="bg-white p-4 rounded-2xl">
              {recipe.preparation.map((item) => (
                <Text className="mb-2" key={item}>
                  {item}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
