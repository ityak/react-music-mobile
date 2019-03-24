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
import Test from './components/Test';
import MusicPage from './containers/nav';
import Search from './components/Search';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MusicPage />
          <Search />
          <Switch>
            <Route exact path="/" component={Test} />
            {/* <Redirect to="/login" /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
