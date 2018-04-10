import React from 'react';
import PropTypes from 'prop-types';

import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';

const patterns = [Triangles, Pills, Stripes, Dots];

class Jumbotron extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.jumbotronIndex === prevState.backgroundImage) {
      return null;
    }
    return {
      jumbotronBg: {
        backgroundImage: `url(${patterns[nextProps.jumbotronIndex]})`,
      },
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      jumbotronBg: {
        backgroundImage: 'url(Triangles)',
      },
    };
  }

  render() {
    const { jumbotronBg } = this.state;
    const { text } = this.props;
    return (
      <div>
        <div className="jumbotron-container">
          <div className="jumbotron" style={jumbotronBg} />
          <h1 className="jumbotron-text">{text}</h1>
        </div>
      </div>
    );
  }
}
Jumbotron.propTypes = {
  text: PropTypes.string,
  jumbotronIndex: PropTypes.number,
};

Jumbotron.defaultProps = {
  text: 'Coming soon...',
  jumbotronIndex: 0,
};

export default Jumbotron;
