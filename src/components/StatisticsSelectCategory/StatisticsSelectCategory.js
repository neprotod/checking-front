import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsSelectCategory.module.css';

const StatisticsSelectCategory = ({ category, setCategory }) => {
  return (
    <div className={styles.chart__select_wrapper}>
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className={styles.chart__select}
      >
        <option className={styles.chart__select_option} value="Lastweek">
          Week
        </option>
        <option className={styles.chart__select_option} value="Month">
          Month
        </option>
        <option className={styles.chart__select_option} value="Year">
          Year
        </option>
        <option className={styles.chart__select_option} value="All">
          All Time
        </option>
      </select>
    </div>
  );
};

StatisticsSelectCategory.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default StatisticsSelectCategory;
