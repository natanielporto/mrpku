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
    <View className="flex-1 bg-light">
      <Routes />
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </View>
  );
}
