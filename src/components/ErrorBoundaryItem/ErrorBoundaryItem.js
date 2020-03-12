import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes/routes';
import ProtectedRoute from '../ProtectedRoute/index';

import styles from './ErrorBoundaryItem.module.css';

const ErrorBoundaryItem = () => {
  return (
    <>
      <ProtectedRoute
        path={routes.MAIN_PAGE.path}
        component={routes.MAIN_PAGE.component}
      />
      <div className={styles['error-container']}>
        <h1>Something wrong...</h1>
        <NavLink className={styles.error__link} to="/main">
          Go to home page
        </NavLink>
      </div>
    </>
  );
};

export default ErrorBoundaryItem;
