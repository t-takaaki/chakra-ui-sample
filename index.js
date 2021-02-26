import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import App from "./App";

const Root = () => (
  <div>
    <Hello />
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
