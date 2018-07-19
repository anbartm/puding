import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

import Home from './pages/Home';
import SVG from './components/SVG';
import logo from './assets/logo.svg';

import './App.scss';

class App extends Component {
  static contextTypes = {
    multicatEvent: PropTypes.func,
    multicatView: PropTypes.func,
  };
  render() {
    const { multicatEvent } = this.context;
    const appClassName = classNames({
      App: true,
    });
    return (
      <div className={appClassName}>
        <header className="App-header">
          <SVG
            src={logo}
            className="App-logo"
            alt="logo"
            element="div"
            onMouseOver={e => multicatEvent('LogoHover', {})}
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default hot(module)(App);
