import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { View } from "react-native";
import { AppProvider } from "./src/context";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import "react-native-gesture-handler";
import "react-native-get-random-values";

Sentry.init({
  dsn: Constants.expoConfig?.extra?.SENTRY_DSN,
  enableInExpoDevelopment: true,
  environment: __DEV__ ? "development" : "production",
  debug: __DEV__,
  dist: Constants.manifest?.revisionId,
});
import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { View } from "react-native";
import { useFonts } from "expo-font";
import {
  Hind_300Light,
  Hind_400Regular,
  Hind_500Medium,
  Hind_600SemiBold,
  Hind_700Bold,
} from "@expo-google-fonts/hind";

export default function App() {
  const [fontsLoaded] = useFonts({
    Hind_300Light,
    Hind_400Regular,
    Hind_500Medium,
    Hind_600SemiBold,
    Hind_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <Routes />
        <StatusBar style="dark" translucent backgroundColor="transparent" />
      </View>
    </AppProvider>
  );
}
