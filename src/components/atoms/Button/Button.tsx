import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  action: string;
  accessibilityLabel: string;
  color?: string;
  customClass?: string;
  onPress?: () => void;
}

// const StyledButton = styled(Btn);

const defaultClass =
  "bg-yellow boxshadow w-120 h-10 flex justify-center items-center rounded-custom";

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
    >
      <Text className="font-bold" style={{ color: color ?? "white" }}>
        {action}
      </Text>
    </TouchableOpacity>
  );
}
