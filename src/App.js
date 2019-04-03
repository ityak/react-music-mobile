import 'antd-mobile/dist/antd-mobile.css';

import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {
  Route,
  Switch,
  // Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import rootReducer from './redux/reducers/reducers';
// import Test from './components/Test';
import My from './containers/My/My';
import Find from './containers/Find/Find';
// import MusicPage from './containers/nav';
import TopNavBar from './containers/TopNavBar/TopNavBar';
// import Search from './components/Search/Search';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <TopNavBar />

          <Switch>
            <Route exact path="/My" component={My} />
            <Route exact path="/Find" component={Find} />
          </Switch>

        </Router>
      </Provider>
    );
  }
}

export default App;
