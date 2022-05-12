import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import Center from "../components/Center";
import { AuthContext } from "../utils/AuthProvider";

const HomeScreen: React.FC = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <Center>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={logOut} />
    </Center>
  );
};

export default HomeScreen;
