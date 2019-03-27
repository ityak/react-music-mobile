import React, { Component } from "react";
//antd-mobile.css 样式
import "antd-mobile/dist/antd-mobile.css";
//页面
import Test from "./components/Test";
import YellowTab from "./components/yellowTab";
import GreenTab from "./components/greenTab";
//头部
import MusicPage from "./containers/nav";
import Musicfloor from "./containers/floor";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <MusicPage />
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/greenTab" component={GreenTab} />
          <Route exact path="/yellowTab" component={YellowTab} />
          {/* <Route exact path="/music" component={MusicPage} /> */}
          <Redirect to="/greenTab" />
        </Switch>
        <Musicfloor />
      </Router>
    );
  }
}

export default App;
