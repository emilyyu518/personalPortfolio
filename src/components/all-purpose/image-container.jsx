import React from 'react';
import PropTypes from 'prop-types';

import Triangles from '../../assets/triangles.svg';
import Pills from '../../assets/pills.svg';
import Stripes from '../../assets/stripes.svg';
import Dots from '../../assets/dots.svg';

const ImageContainer = (props) => {
  const {
    image,
    pattern,
    height,
    width,
    alt,
    imgClass,
  } = props;

  const patterns = {
    Triangles: {
      backgroundImage: `url(${Triangles})`,
      backgroundSize: '12rem',
      borderColor: 'rgb(61, 0, 255)',
      height,
      width: height,
    },
    Pills: {
      backgroundImage: `url(${Pills})`,
      backgroundSize: '10rem',
      borderColor: 'rgb(188, 0, 119)',
      height,
      width: height,
    },
    Stripes: {
      backgroundImage: `url(${Stripes})`,
      backgroundSize: '50rem',
      borderColor: 'rgb(0, 153, 128)',
      height,
      width: height,
    },
    Dots: {
      backgroundImage: `url(${Dots})`,
      borderColor: 'rgb(207, 119, 95)',
      height,
      width: height,
    },
  };

  const size = { height, width };

  return (
    <div className="imagebox-container">
      <div className={`imagebox imagebox-pattern ${imgClass}`} style={patterns[pattern]} />
      <img className={`imagebox image ${imgClass}`} src={image} style={size} alt={alt} />
    </div>
  );
};

ImageContainer.propTypes = {
  image: PropTypes.string,
  pattern: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
};

ImageContainer.defaultProps = {
  image: null,
  pattern: 'Stripes',
  height: 'auto',
  width: 'auto',
  alt: 'an image',
};

export default ImageContainer;
