import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { HomeScreen } from "../components/templates/home";
import { UserScreen } from "../components/templates/user";
import { BookmarksScreen } from "../components/templates/bookmarks";
import { FaqScreen } from "../components/templates/faq";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();
const ICON_SIZE = 35;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0C6941",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          margin: 24,
          backgroundColor: "#8BDFBB",
          borderRadius: 20,
          paddingBottom: 10,
          // borderTopWidth: 0,
          // paddingTop: 10,
          // height: Platform.OS === "ios" ? 80 : 60,
          // elevation: 0,
          // marginBottom: Platform.OS === "ios" ? 10 : 5,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={ICON_SIZE} />
          ),
        }}
      />
      {/* <Screen
                 name="Perfil"
                 component={UserScreen}
                 options={{
                     tabBarIcon: ({ color }) => (
                         <FontAwesome name="user-circle-o" color={color} size={ICON_SIZE} />
                         ),
                       }}
                   /> */}
      {/* <Screen
                   name="Salvas"
                   component={BookmarksScreen}
                   options={{
                       tabBarIcon: ({ color }) => (
                           <FontAwesome name="book" color={color} size={ICON_SIZE} />
                           ),
                         }}
                     /> */}
      <Screen
        name="Dúvidas"
        component={FaqScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="questioncircle" color={color} size={ICON_SIZE} />
          ),
        }}
      />
    </Navigator>
  );
}
