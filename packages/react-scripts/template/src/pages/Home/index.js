import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withMultiplytix } from 'multiplytix-react';

class Home extends PureComponent {
  static propTypes = {
    multiplytixEvent: PropTypes.func,
    multiplytixView: PropTypes.func,
  };
  componentDidMount() {
    const { multiplytixView } = this.props;
    multiplytixView('/');
  }
  render() {
    return (
      <div className="Home">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withMultiplytix(Home);
