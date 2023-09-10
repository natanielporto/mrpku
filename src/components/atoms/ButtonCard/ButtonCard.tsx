import { Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ButtonCard = ({
  image,
  category,
  onPress,
}: {
  image: string;
  category: string;
  onPress: Function;
}) => {
  return (
    <TouchableOpacity
      className="flex-1 flex-row items-center rounded-3xl bg-green-50 h-[140] w-[93%] mx-auto relative shadow-sm"
      onPress={() => onPress(category)}
    >
      <View className="transform rotate-[20deg] mt-8 mr-1 absolute right-[-23px]">
        <Ionicons name="leaf-outline" size={95} color="#F2F1EF" />
      </View>
      <View>
        <Image
          source={{ uri: image }}
          className="w-28 h-28 object-fill rounded-2xl ml-4 mr-8"
        />
      </View>
      <View className="flex w-[50%]">
        <Text className="text-2xl">{category}</Text>
      </View>
    </TouchableOpacity>
  );
};
