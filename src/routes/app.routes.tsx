import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { HomeScreen } from "../components/templates/home";
import { UserScreen } from "../components/templates/user";
import { BookmarksScreen } from "../components/templates/bookmarks";
import { FaqScreen } from "../components/templates/faq";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

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
          elevation: 0,
          marginBottom: Platform.OS === "ios" ? 10 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={36} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={36} />
          ),
        }}
      />
      <Screen
        name="Salvas"
        component={BookmarksScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book" color={color} size={36} />
          ),
        }}
      />
      <Screen
        name="Dúvidas"
        component={FaqScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="help-circle" color={color} size={36} />
          ),
        }}
      />
    </Navigator>
  );
}
