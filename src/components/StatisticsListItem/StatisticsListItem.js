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
    <>
      <div className={styles.item__name_wrapper}>
        <div
          className={styles.item__element_color}
          style={{ backgroundColor: roleColor }}
        />
        <p className={styles.item__value}>{role}</p>
      </div>
      <p className={styles.item__value}>{precents} %</p>
      <p className={styles.item__value}>
        {completedTask} / {totalRoleTasks}
      </p>
    </>
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
