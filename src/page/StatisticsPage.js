import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as operations from '../redux/statistics/statisticsOperations';

import StatisticsList from '../components/StatisticsList';

class StatisticsPage extends Component {
  static propTypes = {
    getRoles: PropTypes.func.isRequired,
    getDateTasks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getRoles, getDateTasks } = this.props;

    getRoles();
    getDateTasks('all');
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>

        <StatisticsList />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   getDateTasks: () => dispatch(operations.setTasksByDate('all')),
//   getRoles: () => dispatch(operations.setUserRoles()),
// });
const mapDispatchToProps = {
  getDateTasks: operations.setTasksByDate,
  getRoles: operations.setUserRoles,
};

export default connect(null, mapDispatchToProps)(StatisticsPage);
