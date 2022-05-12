import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { AuthPramsList } from "./utils/AuthPramsList";
import Center from "./components/Center";
import { ActivityIndicator, Text } from "react-native";
import { AuthContext } from "./utils/AuthProvider";
import AppTabs from "./components/AppTabs";

interface RoouteProps {}

const Stack = createNativeStackNavigator<AuthPramsList>();

const Routes: React.FC<RoouteProps> = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          // screenOptions={{
          //   header: () => null,
          // }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
