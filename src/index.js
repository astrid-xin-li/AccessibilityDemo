import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CanvasDemo from "./CanvasDemo";
import TabIndexTestDome from "./TabIndexTest";
import AriaTestDome from "./AriaTest";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <CanvasDemo /> */}
    {/* <App /> */}
    <TabIndexTestDome />
    <AriaTestDome />
  </StrictMode>,
  rootElement
);
