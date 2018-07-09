import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import classNames from 'classnames';
import SVG from './components/SVG';

class App extends Component {
  render() {
    const appClassName = classNames({
      App: true,
    });
    return (
      <div className={appClassName}>
        <header className="App-header">
          <SVG src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
