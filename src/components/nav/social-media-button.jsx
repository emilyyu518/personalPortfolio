import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaButton = (props) => {
  const { name, link, icon } = props;
  return (
    <a href={link} target="_blank" title={name} >
      <div className="social-media-button">
        <span className={icon} />
      </div>
    </a>
  );
};

SocialMediaButton.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
};

SocialMediaButton.defaultProps = {
  name: '',
  link: '',
  icon: 'fas fa-times',
};

export default SocialMediaButton;
