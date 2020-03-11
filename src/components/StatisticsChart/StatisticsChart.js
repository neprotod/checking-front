import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut, defaults } from 'react-chartjs-2';

// import styles from './StatisticsChart.module.css';

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

const StatisticsChart = ({ statistics, setCategory, category }) => {
  const data = getData(statistics);
  return (
    <div width="500" height="500">
      <Doughnut
        data={data}
        width={300}
        height={300}
        options={{
          legend: false,
          responsive: false,
          hover: {
            mode: false,
          },
        }}
      />
      <div>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="All">all</option>
          <option value="Lastweek">week</option>
          <option value="Month">month</option>
          <option value="Year">year</option>
        </select>
      </div>
    </div>
  );
};

StatisticsChart.propTypes = {
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
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default StatisticsChart;
