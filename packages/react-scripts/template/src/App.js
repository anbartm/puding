import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

import { ReactComponent as Logo } from './assets/logo.svg';

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
          <Logo
            className="App-logo"
            alt="Logo"
            onMouseOver={e => multicatEvent('LogoHover', {})}
          />
          <h1 className="App-title">Puding</h1>
        </header>

        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
