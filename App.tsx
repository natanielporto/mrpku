import { StatusBar } from "expo-status-bar";
import React from "react";
import { Routes } from "./src/routes";
import "react-native-gesture-handler";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Routes />
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </View>
  );
}
