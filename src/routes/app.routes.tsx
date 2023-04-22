import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { HomeScreen } from "../screens/home";

import HomeSvg from "../assets/home.svg";

const { Navigator, Screen } = createBottomTabNavigator();

const ICON_SIZE = 24;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#ddd",
        tabBarStyle: {
          backgroundColor: "#fafafa",
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={ICON_SIZE} height={ICON_SIZE} />
          ),
        }}
      />
    </Navigator>
  );
}
