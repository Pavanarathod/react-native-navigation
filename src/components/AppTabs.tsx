import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppPramList } from "../utils/AppsPramsList";
import HomeScreen from "../screens/HomeScreen";
import Search from "../screens/Search";

import { Ionicons } from "@expo/vector-icons";

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
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
