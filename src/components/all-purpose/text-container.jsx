import React from 'react';
import PropTypes from 'prop-types';

import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';

const TextContainer = (props) => {
  const { children, pattern } = props;
  const patterns = {
    Triangles: {
      backgroundImage: `url(${Triangles})`,
      backgroundSize: '12rem',
      borderColor: 'rgb(61, 0, 255)',
    },
    Pills: {
      backgroundImage: `url(${Pills})`,
      backgroundSize: '10rem',
      borderColor: 'rgb(188, 0, 119)',
    },
    Stripes: {
      backgroundImage: `url(${Stripes})`,
      backgroundSize: '50rem',
      borderColor: 'rgb(0, 153, 128)',
    },
    Dots: {
      backgroundImage: `url(${Dots})`,
      borderColor: 'rgb(207, 119, 95)',
    },
  };

  const colors = {
    Triangles: {
      backgroundColor: 'rgb(216,211,254)',
    },
    Pills: {
      backgroundColor: 'rgb(241,207,228)',
    },
    Stripes: {
      backgroundColor: 'rgb(208,234,230)',
    },
    Dots: {
      backgroundColor: 'rgb(245,228,224)',
    },
  };

  return (
    <div className="textbox-container">
      <div className="textbox textbox-pattern" style={patterns[pattern]}>
        {children}
      </div>
      <div className="textbox textbox-solid" style={colors[pattern]}>
        {children}
      </div>
    </div>
  );
};

TextContainer.propTypes = {
  children: PropTypes.node,
  pattern: PropTypes.string,
};

TextContainer.defaultProps = {
  children: null,
  pattern: 'Pills',
};

export default TextContainer;
