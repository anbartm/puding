import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withMulticat } from 'multicat-react';

class Home extends PureComponent {
  static propTypes = {
    multicatEvent: PropTypes.func,
    multicatView: PropTypes.func,
  };
  componentDidMount() {
    const { multicatView } = this.props;
    multicatView('/');
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

export default withMulticat(Home);
