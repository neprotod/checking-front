import React from 'react';

import styles from './StatisticsListHeader.module.css';

const StatisticsListHeader = () => {
  return (
    <li className={styles.statistics__list_header}>
      <p className={styles.list__header_title}>Roles</p>
      <p className={styles.list__header_title}>Role percentage, %</p>
      <p className={styles.list__header_title}>
        Tasks done &shy;/&nbsp;planned
      </p>
    </li>
  );
};

export default StatisticsListHeader;
