import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
}

export function TemplateWrapper({ children }: Props) {
  return (
    <SafeAreaView className="flex-1 h-full bg-bgLight">{children}</SafeAreaView>
  );
}
