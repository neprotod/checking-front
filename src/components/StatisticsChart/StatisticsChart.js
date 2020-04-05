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

const defaultData = {
  labels: ['nothing'],
  datasets: [
    {
      data: [100],
      backgroundColor: ['#8E8E8E'],
    },
  ],
};

const arrSum = arr => {
  return arr.reduce((acm, el) => el + acm);
};

const setChartData = statistics => {
  const data = getData(statistics);
  if (arrSum(data.datasets[0].data)) {
    return data;
  }

  const newChartData = data.labels.map(() => 100);

  data.datasets[0].data = newChartData;
  return data;
};

class StatisticsChart extends Component {
  static propTypes = {
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
    this.setState({ size: window.innerWidth < 767 ? 300 : 366 });
  };

  render() {
    const { statistics } = this.props;
    const { size } = this.state;

    const initData = getData(statistics);

    const data = initData.labels.length
      ? setChartData(statistics)
      : defaultData;
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
