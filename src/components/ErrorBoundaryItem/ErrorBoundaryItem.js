import React from 'react';

import styles from './ErrorBoundaryItem.module.css';

// add link on home page and styles
const ErrorBoundaryItem = () => {
  return (
    <div className={styles['error-container']}>
      <h1>Something wrong...</h1>
      <a href="http://localhost:3000/">Go to home page</a>
    </div>
  );
};

export default ErrorBoundaryItem;
