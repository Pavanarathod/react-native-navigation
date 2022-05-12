import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppPramList } from "../utils/AppsPramsList";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";

const Tabs = createBottomTabNavigator<AppPramList>();
const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-home-sharp" : "md-home";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeStack}
      />
      <Tabs.Screen
        options={{
          header: () => null,
        }}
        name="Search"
        component={SearchStack}
      />
    </Tabs.Navigator>
  );
};

export default AppTabs;
