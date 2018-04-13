/* global window */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  active: {
    marginTop: '-.4em',
    marginLeft: '.4em',
    transitionDuration: '.5s',
    transitionProperty: 'margin',
    transitionTimingFunction: 'ease',
    visibility: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
};

const NavButton = (props) => {
  const {
    destination,
    color,
    text,
    setCurrentPage,
    active,
    closeNav,
  } = props;
  const currentlyActive = active || window.location.pathname === destination;

  return (
    <span className="nav-link">
      <Link
        to={destination}
        onClick={() => {
          setCurrentPage(text);
          closeNav();
        }}
      >
        <div className={`nav-button nav-button-${color}`}>
          {text}
        </div>
      </Link>
      <Link to={destination} onClick={() => setCurrentPage(text)}>
        <div className={`nav-button-${color}-active`} style={currentlyActive ? styles.active : styles.hidden}>
          {text}
        </div>
      </Link>
    </span>
  );
};

NavButton.propTypes = {
  destination: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  setCurrentPage: PropTypes.func,
  active: PropTypes.bool,
  closeNav: PropTypes.func,
};

NavButton.defaultProps = {
  destination: '/',
  color: 'peach',
  text: 'about',
  setCurrentPage: null,
  active: false,
  closeNav: null,
};

export default NavButton;
