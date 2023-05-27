import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { View } from "react-native";
import { AppProvider } from "./src/context";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import "react-native-get-random-values";

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
