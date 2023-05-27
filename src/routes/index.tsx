import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useSync } from "../hooks/use-sync";
import { ActivityIndicator, View, StatusBar } from "react-native";
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
