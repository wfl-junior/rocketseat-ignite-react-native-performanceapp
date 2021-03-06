import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import { Home } from "./screens/Home";

export const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />

    <Home />
  </Fragment>
);
