import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withMulticat } from 'multicat-react';

import HomeMarkdown, { attributes as homeMetadata } from 'content/index.md';

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
    const { title } = homeMetadata;
    return (
      <div className="Home">
        <p className="App-intro">
          <h1>{title}</h1>
          <HomeMarkdown />
        </p>
      </div>
    );
  }
}

export default withMulticat(Home);
