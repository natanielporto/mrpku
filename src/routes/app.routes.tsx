import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { HomeScreen } from "../components/templates/home";
import { UserScreen } from "../components/templates/user";
import { BookmarksScreen } from "../components/templates/bookmarks";
import { FaqScreen } from "../components/templates/faq";
import { Platform } from "react-native";

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
          height: Platform.OS === "ios" ? 80 : 60,
          elevation: 0,
          marginBottom: Platform.OS === "ios" ? 10 : 5,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Screen
        name="Salvas"
        component={BookmarksScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      <Screen
        name="Dúvidas"
        component={FaqScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="help-circle" color={color} size={ICON_SIZE} />
          ),
        }}
      />
    </Navigator>
  );
}
