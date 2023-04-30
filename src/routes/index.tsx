import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useSync } from "../hooks/use-sync";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import {
  Hind_300Light,
  Hind_400Regular,
  Hind_500Medium,
  Hind_600SemiBold,
  Hind_700Bold,
} from "@expo-google-fonts/hind";

export function Routes() {
  const [isFontsLoaded] = useFonts({
    Hind_300Light,
    Hind_400Regular,
    Hind_500Medium,
    Hind_600SemiBold,
    Hind_700Bold,
  });

  const { isSyncing } = useSync();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isSyncing || !isFontsLoaded ? (
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
