import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";

interface RoouteProps {}

const Stack = createNativeStackNavigator();

const Routes: React.FC<RoouteProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{
        //   header: () => null,
        // }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
