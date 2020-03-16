import React from 'react';
import LogOut from '../LogOut/index';
import StatisticButton from '../StatisticButton/index';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.StatisticButton}>
        <StatisticButton />
      </p>
      <p className={styles.LogOut}>
        <LogOut />
      </p>
    </div>
  );
};

export default Header;
