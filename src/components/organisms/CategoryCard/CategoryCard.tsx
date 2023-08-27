import { Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Recipe } from "../../../services/recipe/types";

interface Data {
  data: {
    category: string;
    recipies: Recipe[];
  };
}

export const CategoryCard = ({ data }: Data) => {
  console.log(data);

  const handleCategoriesSelect = () => {};

  return (
    <TouchableOpacity
      className="flex-1 flex-row rounded-3xl bg-green-50 h-[140] w-[93%] mx-auto relative"
      onPress={handleCategoriesSelect}
    >
      <View className="transform rotate-[20deg] mt-8 absolute right-[-23px]">
        <Ionicons name="leaf-outline" size={95} color="#F2F1EF" />
      </View>
      <Text>{data?.category}</Text>
      {/* <Image source={{ uri: image }} /> */}
    </TouchableOpacity>
  );
};
