import React from "react";
import { View, Text } from "react-native";

interface Props {
  title: string;
  underline?: boolean;
  customClass?: string;
  classes?: string;
}

const defaultClass = "w-full";

export function Title({
  title,
  underline = false,
  customClass,
  classes,
}: Props) {
  const titleComponent = (
    <Text
      style={{ fontFamily: "HammersmithOne_400Regular" }}
      className={customClass || defaultClass}
    >
      {title}
    </Text>
  );

  return underline ? (
    <View className={`border-b-4 border-b-green mb-ten ${classes}`}>
      {titleComponent}
    </View>
  ) : (
    titleComponent
  );
}
