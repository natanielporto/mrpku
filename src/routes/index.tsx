import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
