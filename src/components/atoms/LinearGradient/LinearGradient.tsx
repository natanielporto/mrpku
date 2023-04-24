import React, { FC } from "react";
import { LinearGradient as Gradient } from "expo-linear-gradient";

interface Props {
  children: JSX.Element;
  colors?: string[];
}

export const LinearGradient: FC<Props> = ({
  children,
  colors = ["#0c6941", "#8bdfbb"],
}) => {
  return (
    <Gradient
      colors={colors}
      style={{ borderRadius: 20 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </Gradient>
  );
};
