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
  "bg-amber-500 boxshadow h-8 justify-center items-center rounded-custom";

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
      <Text className="font-bold" style={{ color: color ?? "white" }}>
        {action}
      </Text>
    </TouchableOpacity>
  );
}
