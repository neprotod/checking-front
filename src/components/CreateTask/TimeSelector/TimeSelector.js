import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimeSelector.module.css';

const TimeSelector = ({
  startHoursListIsOpen,
  endHoursListIsOpen,
  startHoursListDisplayToggle,
  endHoursListDisplayToggle,
  startHours,
  endHours,
  startHour,
  endHour,
  onSetStartHour,
  onSetEndHour,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.startHourSelector}>
        <span className={styles.selectorTitle}>Start time</span>
        <div className={styles.selectorContainer}>
          <button
            type="button"
            className={styles.openListBtn}
            onClick={startHoursListDisplayToggle}
          >
            <span>{`${startHour}:00`}</span>
            <svg className={styles.iconArrow}>
              <use href={startHoursListIsOpen ? '#drop_up' : '#drop_down'} />
            </svg>
          </button>
          {startHoursListIsOpen && (
            <div className={styles.startHoursListContainer}>
              <ul className={styles.timeOptionsList}>
                {startHours().map(hour => (
                  <li key={`${hour}_start`} className={styles.timeOptionsItem}>
                    <button
                      className={styles.hourBtn}
                      type="button"
                      name={hour}
                      onClick={onSetStartHour}
                    >
                      <span>{`${hour}:00`}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.endHourSelector}>
        <span className={styles.selectorTitle}>End time</span>
        <div className={styles.selectorContainer}>
          <button
            type="button"
            className={styles.openListBtn}
            onClick={endHoursListDisplayToggle}
          >
            <span>{`${endHour}:00`}</span>
            <svg className={styles.iconArrow}>
              <use href={endHoursListIsOpen ? '#drop_up' : '#drop_down'} />
            </svg>
          </button>
          {endHoursListIsOpen && (
            <div className={styles.endHoursListContainer}>
              <ul className={styles.timeOptionsList}>
                {endHours().map(hour => (
                  <li key={`${hour}_end`} className={styles.timeOptionsItem}>
                    <button
                      className={styles.hourBtn}
                      type="button"
                      name={hour}
                      onClick={onSetEndHour}
                    >
                      <span>{`${hour}:00`}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TimeSelector.propTypes = {
  startHoursListIsOpen: PropTypes.bool.isRequired,
  endHoursListIsOpen: PropTypes.bool.isRequired,
  startHoursListDisplayToggle: PropTypes.func.isRequired,
  endHoursListDisplayToggle: PropTypes.func.isRequired,
  startHours: PropTypes.func.isRequired,
  endHours: PropTypes.func.isRequired,
  startHour: PropTypes.number.isRequired,
  endHour: PropTypes.number.isRequired,
  onSetStartHour: PropTypes.func.isRequired,
  onSetEndHour: PropTypes.func.isRequired,
};

export default TimeSelector;
