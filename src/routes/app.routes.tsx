import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { HomeScreen } from "../screens/home";

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
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" color={color} />,
        }}
      />
    </Navigator>
  );
}
