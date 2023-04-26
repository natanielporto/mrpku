import React from "react";
import { Button, View } from "react-native";
import { styled } from "nativewind";

interface Props {
  action: string;
  accessibilityLabel: string;
  color?: string;
  customClass?: string;
  onPress?: () => void;
}

const StyledButton = styled(Button);

const defaultClass =
  "bg-yellow boxshadow w-120 h-10 flex justify-center items-center rounded-custom";

export function Btn({
  action,
  accessibilityLabel,
  onPress,
  color,
  customClass,
}: Props) {
  return (
    <View className={customClass || defaultClass}>
      <StyledButton
        onPress={onPress}
        title={action}
        accessibilityLabel={accessibilityLabel}
        color={color || "white"}
      />
    </View>
  );
}

export default Btn;
