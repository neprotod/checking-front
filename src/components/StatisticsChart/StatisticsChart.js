import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut, defaults } from 'react-chartjs-2';

import StatisticsSelectCategory from '../StatisticsSelectCategory';

import styles from './StatisticsChart.module.css';

defaults.global.tooltips = false;

const getData = statistics => {
  return {
    labels: statistics.map(el => el.name),
    datasets: [
      {
        data: statistics.map(el => el.precents),
        backgroundColor: statistics.map(el => el.color),
      },
    ],
  };
};

class StatisticsChart extends Component {
  static propTypes = {
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

  state = {
    size: 300,
  };

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ size: window.innerWidth < 486 ? 300 : 366 });
  };

  render() {
    const { statistics } = this.props;
    const { size } = this.state;

    const data = getData(statistics);

    return (
      <div
        className={styles.chart__wrapper}
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        <Doughnut
          data={data}
          width={size}
          height={size}
          options={{
            devicePixelRatio: false,
            responsive: true,
            legend: false,
            hover: {
              mode: false,
            },
          }}
        />
        <StatisticsSelectCategory />
      </div>
    );
  }
}

export default StatisticsChart;
