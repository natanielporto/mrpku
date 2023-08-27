import { View, Text } from "react-native";
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
      <View className="flex-row items-center mr-2">
        <MaterialCommunityIcons name="rice" size={16} color="black" />
        <Text className="text-base ml-1">{servings}</Text>
      </View>

      <View className="flex-row items-center ml-2 mr-4">
        <Ionicons name="timer-outline" size={16} color="black" />
        <Text className="text-base ml-1">{time}</Text>
      </View>
    </View>
  );
}
