import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import '../App.css';

class App extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default connect(state => state)(App);
