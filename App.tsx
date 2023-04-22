import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Btn from "./src/components/atoms/Button/Button";
import * as Font from "expo-font";
import { FontSource } from "expo-font";

type FontMap = Record<string, FontSource> & {
  [fontName: string]: FontSource;
};

export default function App() {
  const handlePress = () => 1;

  async function loadFonts(fonts: FontMap) {
    await Font.loadAsync(fonts);
  }

  useEffect(() => {
    loadFonts({
      "Hind-Bold": require("./assets/fonts/Hind-Bold.ttf"),
      "Hind-Light": require("./assets/fonts/Hind-Light.ttf"),
      "Hind-Medium": require("./assets/fonts/Hind-Medium.ttf"),
      "Hind-Regular": require("./assets/fonts/Hind-Regular.ttf"),
      "Hind-SemiBold": require("./assets/fonts/Hind-SemiBold.ttf"),
    });
  }, []);

  return (
    <SafeAreaView>
      <Btn title="Test Case" onPress={handlePress} />
    </SafeAreaView>
  );
}
