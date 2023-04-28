import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useSync } from "../hooks/use-sync";
import { ActivityIndicator, View } from "react-native";

export function Routes() {
  const { isSyncing } = useSync();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isSyncing ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
