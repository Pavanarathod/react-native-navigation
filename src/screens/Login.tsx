import React from "react";
import { Button, Text } from "react-native";
import Center from "../components/Center";
import { login } from "../features/auth";
import { useAppDispatch } from "../hooks/hooks";
import { AuthNavProps } from "../utils/AuthPramsList";

const Login: React.FC<AuthNavProps<"Register">> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();

  return (
    <Center>
      <Text>Route name: {route.name}</Text>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="Login"
        onPress={() => dispatch(login({ userName: "pavan" }))}
      />
    </Center>
  );
};

export default Login;
