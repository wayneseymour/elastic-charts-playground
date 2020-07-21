import * as React from "react";
import { render } from "react-dom";

// import "@elastic/charts/dist/theme_light.css";
import "@elastic/charts/dist/theme_dark.css";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
