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
      <p className={styles.item__name}>
        <div
          className={styles.item__element_color}
          style={{ backgroundColor: roleColor }}
        />
        {role}
      </p>
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
