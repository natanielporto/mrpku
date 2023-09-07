import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  action: string;
  accessibilityLabel: string;
  color?: string;
  customClass?: string;
  onPress?: () => void;
}

const defaultClass =
  "boxshadow h-8 justify-center items-center rounded-custom px-3";

export function Button({
  action,
  accessibilityLabel,
  onPress,
  color,
  customClass,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={customClass || defaultClass}
      accessibilityLabel={accessibilityLabel}
      style={{ elevation: 2 }}
    >
      <Text className="" style={{ color: color ?? "white" }}>
        {action}
      </Text>
    </TouchableOpacity>
  );
}
