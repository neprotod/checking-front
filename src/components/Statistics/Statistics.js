import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from '../../routes/routes';

import StatisticsList from '../StatisticsList';
import StatisticsChart from '../StatisticsChart';

const Statistics = ({ statistics }) => {
  return (
    <div>
      <StatisticsChart statistics={statistics} />
      <StatisticsList statistics={statistics} />
      <NavLink to={routes.MAIN_PAGE.path}>Back to Dashboard</NavLink>
    </div>
  );
};

Statistics.propTypes = {
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

export default Statistics;
