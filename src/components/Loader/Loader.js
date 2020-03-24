import React from 'react';
import PropTypes from 'prop-types';
import LoaderComponent from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ inner }) => {
  return (
    <div className={inner ? styles.loaderInner : styles.loader}>
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
  inner: false,
};

Loader.propTypes = {
  inner: PropTypes.bool,
};

export default Loader;
