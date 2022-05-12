import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchParamsList } from "../utils/SearchPramsList";
import SearchItem from "../screens/SearchItem";

const Stack = createNativeStackNavigator<SearchParamsList>();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchItem} />
    </Stack.Navigator>
  );
};

export default SearchStack;
