import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Demo from "./Demo";
import TabIndexTestDome from "./TabIndexTest";
import AriaTestDome from "./AriaTest";
import AriaActivedescendant from "./ARIA/ariaActivedescendant";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Demo /> */}
    <AriaActivedescendant />
    <App />
    {/* <TabIndexTestDome /> */}
    {/* <App /> */}
    <TabIndexTestDome />
    <AriaTestDome />
    {/* <AriaTestDome /> */}
  </StrictMode>,
  rootElement
);
