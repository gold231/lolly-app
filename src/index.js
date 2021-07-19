import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import history from "./history";

import App from "./App";

ReactDOM.render(

    <BrowserRouter basename="/" history={history}>
      
        <App />
     
    </BrowserRouter>,

  document.getElementById("root")
);
