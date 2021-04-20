import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Demo from "./Demo";
import TabIndexTestDome from "./TabIndexTest";
import AriaTestDome from "./AriaTest";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Demo />
    <App />
    <TabIndexTestDome /> */}
    <AriaTestDome />
  </StrictMode>,
  rootElement
);
