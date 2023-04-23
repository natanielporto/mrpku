import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export const Button = () => {
  return (
    <StyledView
      style={{
        backgroundColor: "#FFB800",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: -3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 120,
        maxHeight: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <StyledText style={{ color: "#FFFFFF", fontWeight: 700 }}>
        Confira
      </StyledText>
    </StyledView>
  );
};
