import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export const Button = () => {
  return (
    <StyledView>
      <StyledText>Oi</StyledText>
    </StyledView>
  );
};
