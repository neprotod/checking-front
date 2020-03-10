import React from 'react';
import PropTypes from 'prop-types';

const StatisticsListItem = ({ role }) => {
  return (
    <div>
      <h2>Item</h2>
      <p>{role}</p>
    </div>
  );
};

StatisticsListItem.propTypes = {
  role: PropTypes.string.isRequired,
};

export default StatisticsListItem;
