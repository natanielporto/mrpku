import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useSync } from "../hooks/use-sync";
import { ActivityIndicator, View } from "react-native";
import { Hind_400Regular, Hind_700Bold } from "@expo-google-fonts/hind";
import {
  HammersmithOne_400Regular,
  useFonts,
} from "@expo-google-fonts/hammersmith-one";

export function Routes() {
  const [isFontsLoaded] = useFonts({
    Hind_400Regular,
    Hind_700Bold,
    HammersmithOne_400Regular,
  });

  const { isSyncing } = useSync();

  return (
    <SafeAreaView className="flex-1">
      {isSyncing || !isFontsLoaded ? (
        <View className="flex-1 justify-center items-center">
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
