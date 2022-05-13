import React from "react";
import Routes from "../Routes";
import { AuthProvider } from "./AuthProvider";
import { store } from "../app/store";
import { Provider } from "react-redux";

const Providers: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default Providers;
