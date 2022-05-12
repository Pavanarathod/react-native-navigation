import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "../screens/Feed";
import { AuthContext } from "../utils/AuthProvider";
import { HomeNavProps, HomePramsList } from "../utils/HomePramsList";
import Product from "../screens/Product";
import EditProduct from "../screens/EditProduct";

const Stack = createNativeStackNavigator<HomePramsList>();

const HomeStack: React.FC<HomeNavProps<"EditProduct">> = ({
  navigation,
  route,
}) => {
  const { logOut } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Product", {
                  productName: route.params.name,
                })
              }
            >
              <Text
                style={{
                  color: "red",
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: route.params.productName,
        })}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={logOut}>
                <Text>Logout</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
