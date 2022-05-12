import { View, Text, Button } from "react-native";
import React from "react";
import Center from "../components/Center";

const Login: React.FC = ({ navigation }) => {
  return (
    <Center>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};

export default Login;
