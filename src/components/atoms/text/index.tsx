import { ReactNode } from "react";
import { Text as RawText } from "react-native";

type Props = {
  children: ReactNode;
};

export function Text({ children }: Props) {
  return <RawText>{children}</RawText>;
}
