import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsListItem.module.css';

const StatisticsListItem = ({
  roleColor,
  role,
  precents,
  completedTask,
  totalRoleTasks,
}) => {
  return (
    <li className={styles.statistics__list_item}>
      <p>{roleColor}</p>
      <p>{role}</p>
      <p>{precents}%</p>
      <p>
        {completedTask}/{totalRoleTasks}
      </p>
    </li>
  );
};

StatisticsListItem.propTypes = {
  roleColor: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  precents: PropTypes.number.isRequired,
  completedTask: PropTypes.number.isRequired,
  totalRoleTasks: PropTypes.number.isRequired,
};

export default StatisticsListItem;
