import React from "react";
import { Text, View } from "react-native";

export const Button = () => {
  return (
    <View className="bg-yellow boxshadow w-120 h-10 flex justify-center items-center rounded-custom">
      <Text className="text-white font-bold">Confira</Text>
    </View>
  );
};
