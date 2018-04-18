import React from 'react';
import PropTypes from 'prop-types';

import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';


const Heading = (props) => {
  const { text, pattern } = props;
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
    <div className="heading-container">
      <div className="heading heading-pattern" style={patterns[pattern]}>
        {text}
      </div>
      <div className="heading heading-solid" style={colors[pattern]}>
        <h1 className="heading-text">{text}</h1>
      </div>
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  pattern: PropTypes.string,
};

Heading.defaultProps = {
  text: 'Hello there!',
  pattern: 'Dots',
};

export default Heading;
