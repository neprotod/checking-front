import React from 'react';
import PropTypes from 'prop-types';

import StatisticsListItem from '../StatisticsListItem';

const StatisticsList = ({ statistics }) => {
  console.log(statistics);
  return (
    <>
      {statistics && (
        <ul>
          {statistics.map(statistic => (
            <StatisticsListItem
              key={statistic._id}
              roleColor={statistic.color}
              role={statistic.name}
              precents={statistic.precents}
              completedTask={statistic.completedTask}
              totalRoleTasks={statistic.totalRoleTasks}
            />
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
      id_user: PropTypes.string.isRequired,
      completedTask: PropTypes.number.isRequired,
      precents: PropTypes.number.isRequired,
      totalRoleTasks: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
