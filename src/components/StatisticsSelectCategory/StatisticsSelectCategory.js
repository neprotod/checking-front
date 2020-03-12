import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsSelectCategory.module.css';

const options = [
  { value: 'Lastweek', name: 'Week', id: 1 },
  { value: 'Month', name: 'Month', id: 2 },
  { value: 'Year', name: 'Year', id: 3 },
  { value: 'All', name: 'All Time', id: 4 },
];

const StatisticsSelectCategory = ({ category, setCategory }) => {
  return (
    <div className={styles.chart__select_wrapper}>
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className={styles.chart__select}
      >
        {options.map(opt => (
          <option
            key={opt.id}
            className={styles.chart__select_option}
            value={opt.value}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

StatisticsSelectCategory.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default StatisticsSelectCategory;
