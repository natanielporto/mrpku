import React from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
  underline?: boolean;
  customClass?: string;
}

const defaultClass = "font-bold text-2xl";

export function Title({ title, underline = false, customClass }: Props) {
  const titleComponent = (
    <Text className={customClass || defaultClass}>{title}</Text>
  );

  return underline ? (
    <View className="border-b-4 border-b-green mt-fifty mb-ten w-tirtySeven">
      {titleComponent}
    </View>
  ) : (
    titleComponent
  );
}
