import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: JSX.Element;
}

export function TemplateWrapper({ children }: Props) {
  return <SafeAreaView className="flex-1">{children}</SafeAreaView>;
}
