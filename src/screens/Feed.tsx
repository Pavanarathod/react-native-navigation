import { View, Text, FlatList, Button } from "react-native";
import React from "react";
import Center from "../components/Center";
import faker from "@faker-js/faker";
import { HomeNavProps } from "../utils/HomePramsList";

const Feed: React.FC<HomeNavProps<"Feed">> = ({ navigation, route }) => {
  return (
    <Center>
      <FlatList
        style={{
          width: "100%",
        }}
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        renderItem={(item) => {
          return (
            <View>
              <Text
                onPress={() =>
                  navigation.navigate("Product", {
                    productName: item.item,
                  })
                }
              >
                {item.item}
              </Text>
            </View>
          );
        }}
        keyExtractor={(product, index) => product + index}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
      <Text>Feed</Text>
    </Center>
  );
};

export default Feed;
