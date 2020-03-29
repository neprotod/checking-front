import React from 'react';
import PropTypes from 'prop-types';
import LoaderComponent from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ main, statistics }) => {
  // eslint-disable-next-line no-nested-ternary
  const loaderStyle = main
    ? 'loaderMain'
    : statistics
    ? 'loaderStatistics'
    : 'loader';
  return (
    <div className={styles[loaderStyle]}>
      <LoaderComponent
        type="ThreeDots"
        color="#ff6b08"
        height={100}
        width={100}
      />
    </div>
  );
};

Loader.defaultProps = {
  main: false,
  statistics: false,
};

Loader.propTypes = {
  main: PropTypes.bool,
  statistics: PropTypes.bool,
};

export default Loader;
