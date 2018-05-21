import React from 'react';
import PropTypes from 'prop-types';

const IconListItem = (props) => {
  const { icon, text, iconClass, label } = props;

  return (
    <li>
      <div className="icon-list-item-row">
        <span className={`${icon} icon-margin ${iconClass}`} aria-label={label} />
        {text}
      </div>
    </li>
  );
};

IconListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  iconClass: PropTypes.string,
  label: PropTypes.string,
};

IconListItem.defaultProps = {
  icon: '',
  text: '',
  iconClass: '',
  label: 'icon',
};

export default IconListItem;
