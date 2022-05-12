import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomePramsList = {
  Feed: undefined;
  Product: {
    productName: string;
  };
  EditProduct: {
    name: string;
  };
};

export type HomeNavProps<T extends keyof HomePramsList> = {
  navigation: NativeStackNavigationProp<HomePramsList, T>;
  route: RouteProp<HomePramsList, T>;
};
