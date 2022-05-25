import React from "react";
import ReactDOM from "react-dom";
import Home from "./view/home";

import './lib/style/index.less'

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
