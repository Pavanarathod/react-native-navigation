import { Button, Text } from "react-native";
import React from "react";
import Center from "../components/Center";

const Register: React.FC = ({ navigation }) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </Center>
  );
};

export default Register;
