import { View, Text } from "react-native";
import React from "react";
import Center from "../components/Center";
import { HomeNavProps } from "../utils/HomePramsList";

const EditProduct: React.FC<HomeNavProps<"EditProduct">> = ({ route }) => {
  return (
    <Center>
      <Text>{route.params.name}</Text>
    </Center>
  );
};

export default EditProduct;
