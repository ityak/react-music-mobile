import React, { Component } from 'react';
//antd-mobile.css 样式
import 'antd-mobile/dist/antd-mobile.css'
//页面
import Test from "./components/Test"
//头部
import MusicPage from "./containers/nav"
import {
  HashRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <MusicPage/>
        <Switch>
          <Route exact path="/" component={Test} />
          {/* <Route exact path="/music" component={MusicPage} /> */}
        </Switch>
        
      </Router>
    );
  }
}

export default App;
