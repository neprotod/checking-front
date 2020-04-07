import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as operations from '../redux/statistics/statisticsOperations';
import * as selectors from '../redux/statistics/statisticsSelectors';

import Loader from '../components/Loader';
import Statistics from '../components/Statistics';

import styles from '../components/Statistics/Statistics.module.css';

class StatisticsPage extends Component {
  static propTypes = {
    getRoles: PropTypes.func.isRequired,
    getDateTasks: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { getRoles, getDateTasks, category } = this.props;

    getRoles();
    getDateTasks(category);
  }

  componentDidUpdate(prevProps) {
    const { getRoles, getDateTasks, category } = this.props;

    if (prevProps.category !== category) {
      getRoles();
      getDateTasks(category);
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.statistics__page_wrapper}>
        {isLoading && <Loader statistics />}
        {!isLoading && <Statistics />}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  category: selectors.getCategory(store),
  isLoading: selectors.getIsLoading(store),
});

const mapDispatchToProps = {
  getDateTasks: operations.setTasksByDate,
  getRoles: operations.setUserRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
