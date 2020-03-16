import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import routes from '../../routes/routes';
import style from './StatisticButton.module.css';

const statisticsSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
  >
    <path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const tasksSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

let pageButton;

const StatisticButton = ({ history }) => {
  if (history.location.pathname === '/main') {
    pageButton = (
      <Link to={routes.STATISTICS_PAGE.path}>
        <p className={style.statisticsSvg}>{statisticsSvg}</p>
      </Link>
    );
  } else {
    pageButton = (
      <Link to={routes.MAIN_PAGE.path}>
        <p className={style.statisticsSvg}>{tasksSvg}</p>
      </Link>
    );
  }
  return pageButton;
};

export default withRouter(StatisticButton);
