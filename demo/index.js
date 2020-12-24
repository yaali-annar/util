import React from "react";
import { render } from "react-dom";
import { AppProvider } from "../src";
import App from "./App";

const appContainer = document.getElementById("root");

render(
  <AppProvider>
    <App />
  </AppProvider>,
  appContainer
);
