import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type SearchParamsList = {
  SearchScreen: undefined;
  Product: {
    productName: string;
  };
  EditProduct: {
    name: string;
  };
};

export type SearchNavParams<T extends keyof SearchParamsList> = {
  navigation: NativeStackNavigationProp<SearchParamsList, T>;
  route: RouteProp<SearchParamsList, T>;
};
