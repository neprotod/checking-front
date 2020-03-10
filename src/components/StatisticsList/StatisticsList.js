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
            <StatisticsListItem key={statistic._id} role={statistic.name} />
          ))}
        </ul>
      )}
    </>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default StatisticsList;
