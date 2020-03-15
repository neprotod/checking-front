import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import StatisticsList from '../StatisticsList';
import StatisticsChart from '../StatisticsChart';

import styles from './Statistics.module.css';

const Statistics = ({ statistics }) => {
  return (
    <div className={styles.statistics__wrapper}>
      <h1 className={styles.statistics__title}>Statistics</h1>
      <div className={styles.statistics__section}>
        <StatisticsChart statistics={statistics} />
        <StatisticsList statistics={statistics} />
      </div>
      <div className={styles.home__button_wrapper}>
        <NavLink className={styles.home__button} to="/main">
          Back to Dashboard
        </NavLink>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      completedTask: PropTypes.number.isRequired,
      precents: PropTypes.number.isRequired,
      totalRoleTasks: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
