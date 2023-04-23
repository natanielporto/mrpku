import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface BtnProps {
  title: string;
  onPress: () => {};
}

const Btn = ({ title, onPress }: BtnProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="text-red">{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
