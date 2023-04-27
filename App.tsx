import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { View } from "react-native";
import { Database } from "./src/services/database";
import { Sync } from "./src/services/sync";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import "react-native-gesture-handler";
import "react-native-get-random-values";

console.log("DEV", __DEV__);
console.log("Sentry DSN", Constants.expoConfig?.extra?.SENTRY_DSN);
Sentry.init({
  dsn: Constants.expoConfig?.extra?.SENTRY_DSN,
  enableInExpoDevelopment: true,
  environment: __DEV__ ? "development" : "production",
  debug: __DEV__,
  dist: Constants.manifest?.revisionId,
});

export default function App() {
  Database.instance.sql("SELECT * FROM config").then((data) => {
    console.log("Database Data", data);
  });

  useEffect(() => {
    const sync = new Sync();
    sync.execute();
  }, []);

  Database.instance.sql("SELECT * FROM recipe").then((data) => {
    console.log(data);
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Routes />
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </View>
  );
}
