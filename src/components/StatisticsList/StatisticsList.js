import React from 'react';
import PropTypes from 'prop-types';

import StatisticsListItem from '../StatisticsListItem';
import StatisticsListHeader from '../StatisticsListHeader';

import styles from './StatisticsList.module.css';

const StatisticsList = ({ statistics }) => {
  return (
    <>
      {statistics && (
        <ul className={styles.statistics__list}>
          <StatisticsListHeader />
          {statistics.map(statistic => (
            <li key={statistic._id} className={styles.statistics__list_item}>
              <StatisticsListItem
                roleColor={statistic.color}
                role={statistic.name}
                precents={statistic.precents}
                completedTask={statistic.completedTask}
                totalRoleTasks={statistic.totalRoleTasks}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

StatisticsList.propTypes = {
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

export default StatisticsList;
