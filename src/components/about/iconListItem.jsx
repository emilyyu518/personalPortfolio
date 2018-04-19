import React from 'react';
import PropTypes from 'prop-types';

const IconListItem = (props) => {
  const { icon, text, iconClass } = props;

  return (
    <li>
      <div className="icon-list-item-row">
        <span className={`${icon} icon-margin ${iconClass}`} />
        {text}
      </div>
    </li>
  );
};

IconListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  iconClass: PropTypes.string,
};

IconListItem.defaultProps = {
  icon: '',
  text: '',
  iconClass: '',
};

export default IconListItem;
