import { View, Text, Button } from "react-native";
import React from "react";
import { HomeNavProps } from "../utils/HomePramsList";
import Center from "../components/Center";

const Product: React.FC<HomeNavProps<"Product">> = ({ route, navigation }) => {
  return (
    <Center>
      <Text>{route.params.productName}</Text>
      <Button
        title="Edit this product."
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.productName,
          })
        }
      />
    </Center>
  );
};

export default Product;
