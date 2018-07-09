import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './assets/logo.svg';
import './App.scss';
import classNames from 'classnames';
import SVG from './components/SVG';
import Home from './pages/Home';

class App extends Component {
  static contextTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func,
  };
  render() {
    const { multiplytixEvent } = this.context;
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
            onMouseOver={e => multiplytixEvent('LogoHover', {})}
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
