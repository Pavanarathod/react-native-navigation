import React from "react";
import { Button, Text } from "react-native";
import Center from "../components/Center";
import { AuthNavProps } from "../utils/AuthPramsList";

const Register: React.FC<AuthNavProps<"Login">> = ({ navigation }) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </Center>
  );
};

export default Register;
