import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Demo from "./Demo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Demo />
    <App />
  </StrictMode>,
  rootElement
);
