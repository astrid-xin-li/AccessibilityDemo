import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Demo from "./Demo";
import TestDome from "./Test";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TestDome />
    {/* <Demo /> */}
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
