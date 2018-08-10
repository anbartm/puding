import React, { PureComponent } from 'react';

class Img extends PureComponent {
  render() {
    const { src } = this.props;

    return <img className="Image" src={src} alt="" />;
  }
}

export default Img;
