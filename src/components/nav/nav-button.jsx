import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
  const { destination, color, text } = props;
  return (
    <Link to={destination} className={`nav-button-${color}`}>
      {text}
    </Link>
  );
};

NavButton.propTypes = {
  destination: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

NavButton.defaultProps = {
  destination: '/',
  color: 'peach',
  text: 'about',
};

export default NavButton;
