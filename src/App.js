import React from "react";
import { withRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import history from "./history";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container-scroller">
        <AppRoutes history={history} />
      </div>
    );
  }
}

withRouter(App);
export default App;
