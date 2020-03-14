import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';

const ModalMenuMarkup = ({ name, bg, onClickIsMobile, picture, title }) => {
  return (
    <button type="button" name={name} className={bg} onClick={onClickIsMobile}>
      <p className={styles.menuButtonPict}>{picture}</p>
      <p className={styles.menuButtonText}>{title}</p>
    </button>
  );
};

ModalMenuMarkup.propTypes = {
  picture: PropTypes.shape().isRequired,
  onClickIsMobile: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalMenuMarkup;
