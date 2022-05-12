import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppPramList = {
  Home: undefined;
  Search: undefined;
};

export type TabNavProps<T extends keyof AppPramList> = {
  navigation: NativeStackNavigationProp<AppPramList, T>;
  route: RouteProp<AppPramList, T>;
};
