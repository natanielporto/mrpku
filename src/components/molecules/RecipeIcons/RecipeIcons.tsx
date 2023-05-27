import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface RecipeIconsProps {
  temperature: "hot" | "cold";
  servings: number;
  time: number;
}

export function RecipeIcons({ temperature, servings, time }: RecipeIconsProps) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <MaterialCommunityIcons name="rice" size={24} color="black" />
        <Text className="text-xl ml-1">{servings}</Text>
      </View>

      {temperature === "hot" ? (
        <MaterialCommunityIcons name="fire-circle" size={24} color="black" />
      ) : (
        <Ionicons name="ios-snow-outline" size={24} color="black" />
      )}

      <View className="flex-row items-center">
        <Ionicons name="timer-outline" size={24} color="black" />
        <Text className="text-xl ml-1">{time}</Text>
      </View>
    </View>
  );
}
