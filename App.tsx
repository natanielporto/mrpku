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

export default function App() {
  return (
    <AppProvider>
      <View className="flex-1 bg-bgLight">
        <Routes />
        <StatusBar style="dark" translucent backgroundColor="transparent" />
      </View>
    </AppProvider>
  );
}
