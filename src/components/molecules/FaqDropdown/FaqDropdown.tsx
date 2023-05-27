import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  question: string;
  answer: string;
}

export function FaqDropdown({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Pressable className="mb-4" onPress={() => setOpen(!open)}>
      <View className="flex items-center justify-between flex-row bg-white rounded-sm p-2 mx-6">
        <Text>{question}</Text>
        <View className="bg-lightGreen rounded-sm">
          <MaterialCommunityIcons
            name={open ? "arrow-up-right" : "arrow-down-right"}
            size={24}
            color="white"
          />
        </View>
      </View>

      <View
        className={`flex items-center justify-between flex-row bg-white rounded-sm p-2 mx-6 ${
          open ? "" : "hidden"
        }`}
      >
        <Text>{answer}</Text>
      </View>
    </Pressable>
  );
}
