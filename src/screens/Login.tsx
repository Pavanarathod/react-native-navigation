import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import Center from "../components/Center";
import { AuthNavProps, AuthPramsList } from "../utils/AuthPramsList";
import { AuthContext } from "../utils/AuthProvider";

const Login: React.FC<AuthNavProps<"Register">> = ({ navigation, route }) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Route name: {route.name}</Text>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={login} />
    </Center>
  );
};

export default Login;
