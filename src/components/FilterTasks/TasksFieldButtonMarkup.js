import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';

const TasksFieldButtonMarkup = ({
  name,
  bg,
  onClickFilter,
  picture,
  title,
}) => {
  return (
    <button type="button" name={name} className={bg} onClick={onClickFilter}>
      <p className={styles.menuButtonPict}>{picture}</p>
      <p className={styles.menuButtonText}>{title}</p>
    </button>
  );
};

TasksFieldButtonMarkup.propTypes = {
  picture: PropTypes.shape().isRequired,
  onClickFilter: PropTypes.func.isRequired,
  bg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TasksFieldButtonMarkup;
