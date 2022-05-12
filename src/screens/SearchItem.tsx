import { View, Text, Button, FlatList } from "react-native";
import React, { useState } from "react";
import Center from "../components/Center";
import faker from "@faker-js/faker";
import { SearchNavParams } from "../utils/SearchPramsList";

const SearchItem: React.FC<SearchNavParams<"SearchScreen">> = ({
  navigation,
  route,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Center>
      <Button title="Search Product" onPress={() => setShow(true)} />

      {show && (
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
      )}
    </Center>
  );
};

export default SearchItem;
